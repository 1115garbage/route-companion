package com.routecompanion.app

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.speech.tts.TextToSpeech
import android.util.Log
import android.view.WindowManager
import android.webkit.GeolocationPermissions
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.webkit.WebViewAssetLoader
import java.util.Locale

class MainActivity : AppCompatActivity(), TextToSpeech.OnInitListener {
    private lateinit var webView: WebView
    private lateinit var osmandBridge: OsmAndNavigationBridge
    private var tts: TextToSpeech? = null
    private var isTtsReady = false
    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    private val filePickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        try {
            val uris = WebChromeClient.FileChooserParams.parseResult(result.resultCode, result.data)
            fileUploadCallback?.onReceiveValue(uris)
        } catch (e: Exception) {
            Log.e(TAG, "Error in file picker result", e)
            fileUploadCallback?.onReceiveValue(null)
        } finally {
            fileUploadCallback = null
        }
    }

    companion object {
        private const val LOCATION_PERMISSION_REQUEST = 1001
        private const val TAG = "RouteCompanion"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        try {
            tts = TextToSpeech(this, this)
        } catch (e: Exception) {
            Log.w(TAG, "TTS init error", e)
        }

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        WebView.setWebContentsDebuggingEnabled(true)

        webView = WebView(this).apply {
            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                setGeolocationEnabled(true)
                allowFileAccess = true
                allowContentAccess = true
                allowFileAccessFromFileURLs = true
                allowUniversalAccessFromFileURLs = true
                useWideViewPort = true
                loadWithOverviewMode = true
                cacheMode = WebSettings.LOAD_DEFAULT
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                userAgentString = "GarbageRoute/1.0.4 (Linux; Android; Mobile; OpenStreetMap Navigation Client)"
            }

            webChromeClient = object : WebChromeClient() {
                override fun onGeolocationPermissionsShowPrompt(
                    origin: String?,
                    callback: GeolocationPermissions.Callback?
                ) {
                    callback?.invoke(origin, true, true)
                }

                override fun onShowFileChooser(
                    webView: WebView?,
                    filePathCallback: ValueCallback<Array<Uri>>?,
                    fileChooserParams: FileChooserParams?
                ): Boolean {
                    fileUploadCallback?.onReceiveValue(null)
                    fileUploadCallback = filePathCallback

                    val intent = Intent(Intent.ACTION_GET_CONTENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "*/*"
                    }

                    try {
                        filePickerLauncher.launch(Intent.createChooser(intent, "Select GPX File"))
                        return true
                    } catch (e: Exception) {
                        Log.e(TAG, "Cannot launch file picker", e)
                        fileUploadCallback?.onReceiveValue(null)
                        fileUploadCallback = null
                        return false
                    }
                }
            }

            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? {
                    val res = assetLoader.shouldInterceptRequest(request.url)
                    return res ?: super.shouldInterceptRequest(view, request)
                }

                override fun shouldOverrideUrlLoading(
                    view: WebView,
                    request: WebResourceRequest
                ): Boolean {
                    val url = request.url.toString()
                    if (url.startsWith("https://appassets.androidplatform.net/")) {
                        return false
                    }
                    try {
                        val intent = Intent(Intent.ACTION_VIEW, request.url).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                        startActivity(intent)
                    } catch (e: Exception) {
                        Log.w(TAG, "Cannot open external intent: $url", e)
                    }
                    return true
                }
            }

            addJavascriptInterface(AndroidBridge(), "AndroidBridge")
        }

        setContentView(webView)
        checkLocationPermission()

        osmandBridge = OsmAndNavigationBridge(this) { maneuver, street, distanceMeters ->
            runOnUiThread {
                val safeManeuver = maneuver.replace("'", "\\'")
                val safeStreet = street.replace("'", "\\'")
                val js = "window.onOsmAndNavUpdate && window.onOsmAndNavUpdate('$safeManeuver', '$safeStreet', $distanceMeters);"
                webView.evaluateJavascript(js, null)
            }
        }
        osmandBridge.start()

        webView.loadUrl("https://appassets.androidplatform.net/assets/dist/index.html")
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts?.language = Locale.US
            isTtsReady = true
        }
    }

    inner class AndroidBridge {
        @JavascriptInterface
        fun isAndroidApp(): Boolean = true

        @JavascriptInterface
        fun vibrate(type: String) {
            try {
                val vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                    val manager = getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager
                    manager.defaultVibrator
                } else {
                    @Suppress("DEPRECATION")
                    getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
                }

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    val effect = when (type) {
                        "skip" -> VibrationEffect.createWaveform(longArrayOf(0, 50, 40, 70), -1)
                        "complete" -> VibrationEffect.createWaveform(longArrayOf(0, 80, 50, 100), -1)
                        "undo" -> VibrationEffect.createOneShot(40, VibrationEffect.DEFAULT_AMPLITUDE)
                        else -> VibrationEffect.createOneShot(30, VibrationEffect.DEFAULT_AMPLITUDE)
                    }
                    vibrator.vibrate(effect)
                } else {
                    @Suppress("DEPRECATION")
                    vibrator.vibrate(40)
                }
            } catch (e: Exception) {
                Log.w(TAG, "Vibrate error", e)
            }
        }

        @JavascriptInterface
        fun speak(text: String) {
            if (isTtsReady && tts != null) {
                try {
                    tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "route_tts")
                } catch (e: Exception) {
                    Log.w(TAG, "TTS speak error", e)
                }
            }
        }

        @JavascriptInterface
        fun openOsmAnd(lat: Double, lon: Double) {
            runOnUiThread {
                try {
                    val osmandIntent = Intent(Intent.ACTION_VIEW, Uri.parse("osmand.navigation:q=$lat,$lon")).apply {
                        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    }
                    startActivity(osmandIntent)
                } catch (e: Exception) {
                    try {
                        val geoIntent = Intent(Intent.ACTION_VIEW, Uri.parse("geo:$lat,$lon?q=$lat,$lon(Customer)")).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                        startActivity(geoIntent)
                    } catch (err: Exception) {
                        Log.w(TAG, "Cannot launch navigation intent", err)
                    }
                }
            }
        }
    }

    private fun checkLocationPermission() {
        val permissions = arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
        )
        val needed = permissions.filter {
            ContextCompat.checkSelfPermission(this, it) != PackageManager.PERMISSION_GRANTED
        }
        if (needed.isNotEmpty()) {
            ActivityCompat.requestPermissions(this, needed.toTypedArray(), LOCATION_PERMISSION_REQUEST)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        osmandBridge.stop()
        try {
            tts?.stop()
            tts?.shutdown()
        } catch (e: Exception) {}
    }
}
