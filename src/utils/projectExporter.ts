import JSZip from 'jszip';

// Explicit content for Android native bridge files to guarantee they are 100% present in the ZIP
const ANDROID_SETTINGS_GRADLE = `pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

rootProject.name = "GarbageRoute"
include(":app")
`;

const ANDROID_ROOT_GRADLE = `plugins {
    id("com.android.application") version "8.2.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.22" apply false
}
`;

const ANDROID_APP_GRADLE = `plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.routecompanion.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.garbageroute.app"
        minSdk = 24
        targetSdk = 34
        versionCode = 5
        versionName = "1.0.4"
    }


    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("androidx.webkit:webkit:1.10.0")
}
`;

const ANDROID_MANIFEST = `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.VIBRATE" />

    <!-- Android 11+ package visibility to query and bind to OsmAnd services -->
    <queries>
        <package android:name="net.osmand" />
        <package android:name="net.osmand.plus" />
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="osmand.navigation" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="geo" />
        </intent>
    </queries>

    <application
        android:allowBackup="true"
        android:hardwareAccelerated="true"
        android:icon="@mipmap/ic_launcher"
        android:label="Garbage Route"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AppCompat.NoActionBar">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="Garbage Route"
            android:icon="@mipmap/ic_launcher"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:configChanges="orientation|screenSize|screenLayout|keyboardHidden"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
`;

const ANDROID_STRINGS_XML = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Garbage Route</string>
</resources>
`;

const ANDROID_PROGUARD_RULES = `# Proguard rules for Garbage Route
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
`;

const ANDROID_GRADLE_PROPERTIES = `android.useAndroidX=true
android.nonTransitiveRClass=true
org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
`;

const MAIN_ACTIVITY_KT = `package com.routecompanion.app

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
                cacheMode = WebSettings.LOAD_DEFAULT
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
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
                val safeManeuver = maneuver.replace("'", "\\\\'")
                val safeStreet = street.replace("'", "\\\\'")
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
`;

const OSMAND_BRIDGE_KT = `package com.routecompanion.app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.util.Log
import androidx.core.content.ContextCompat

/**
 * Listens for OsmAnd turn-by-turn navigation broadcasts and relays them to WebView
 */
class OsmAndNavigationBridge(
    private val context: Context,
    private val onUpdate: (maneuver: String, street: String, distanceMeters: Int) -> Unit
) {
    private val navBroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(ctx: Context?, intent: Intent?) {
            if (intent?.action == "net.osmand.NAVIGATION_INFO") {
                val maneuver = intent.getStringExtra("NEXT_MANEUVER_TYPE") ?: "straight"
                val street = intent.getStringExtra("NEXT_STREET_NAME") ?: ""
                val dist = intent.getIntExtra("DISTANCE_TO_NEXT", 0)
                onUpdate(maneuver, street, dist)
            }
        }
    }

    fun start() {
        val filter = IntentFilter("net.osmand.NAVIGATION_INFO")
        try {
            ContextCompat.registerReceiver(
                context,
                navBroadcastReceiver,
                filter,
                ContextCompat.RECEIVER_EXPORTED
            )
        } catch (e: Exception) {
            try {
                context.registerReceiver(navBroadcastReceiver, filter)
            } catch (err: Exception) {
                Log.w("OsmAndBridge", "Could not register receiver", err)
            }
        }
    }

    fun stop() {
        try {
            context.unregisterReceiver(navBroadcastReceiver)
        } catch (e: Exception) {
            Log.w("OsmAndBridge", "Error unregistering receiver", e)
        }
    }
}
`;

const GITHUB_WORKFLOW = `name: Build Android APK

on:
  push:
    branches: [ "main", "master" ]
  workflow_dispatch:

jobs:
  build:
    name: Build & Package APK
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Extract Project ZIP (if unextracted)
        run: |
          if [ ! -d "src" ]; then
            LATEST_ZIP=\$(ls -t *.zip 2>/dev/null | head -n 1)
            if [ -n "\$LATEST_ZIP" ] && [ -f "\$LATEST_ZIP" ]; then
              echo "Extracting latest archive: \$LATEST_ZIP"
              unzip -o "\$LATEST_ZIP"
              echo "Source unzipped successfully!"
            fi
          fi

      - name: Set up Java JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Set up Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Force All-Files Picker
        run: |
          sed -i 's/accept="[^"]*"/accept=""/g' src/components/GpxImportModal.tsx 2>/dev/null || true
          sed -i 's/accept="[^"]*"/accept=""/g' src/App.tsx 2>/dev/null || true
          sed -i 's/fileChooserParams?.createIntent()/null/g' android/app/src/main/java/com/routecompanion/app/MainActivity.kt 2>/dev/null || true

      - name: Build Web Application
        run: |
          npm install --legacy-peer-deps
          npm run build
          mkdir -p android/app/src/main/assets/dist
          cp -r dist/* android/app/src/main/assets/
          cp -r dist/* android/app/src/main/assets/dist/

      - name: Ensure Android Structure & Config
        run: |
          mkdir -p android/app/src/main/res/values
          touch android/app/proguard-rules.pro
          printf '<?xml version="1.0" encoding="utf-8"?>\\n<resources>\\n    <string name="app_name">Garbage Route</string>\\n</resources>\\n' > android/app/src/main/res/values/strings.xml
          echo "sdk.dir=$ANDROID_HOME" > android/local.properties

      - name: Setup Gradle
        uses: gradle/actions/setup-gradle@v3
        with:
          gradle-version: 8.5
          cache-disabled: true

      - name: Build Android APK
        working-directory: ./android
        run: |
          set +e
          gradle assembleDebug -x lint -x test --no-daemon --stacktrace 2>&1 | tee build.log
          STATUS=\${PIPESTATUS[0]}
          if [ $STATUS -ne 0 ]; then
            echo "### ❌ Build Failed Log Summary" >> $GITHUB_STEP_SUMMARY
            echo '\`\`\`text' >> $GITHUB_STEP_SUMMARY
            tail -n 100 build.log >> $GITHUB_STEP_SUMMARY
            echo '\`\`\`' >> $GITHUB_STEP_SUMMARY
            exit $STATUS
          else
            echo "### ✅ Android APK Built Successfully!" >> $GITHUB_STEP_SUMMARY
          fi

      - name: Upload Build Log Artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: gradle-build-log
          path: android/build.log

      - name: Upload Ready-to-Install APK
        if: success()
        uses: actions/upload-artifact@v4
        with:
          name: Garbage-Route-APK
          path: android/app/build/outputs/apk/debug/*.apk
          retention-days: 14
`;

const README_MD = `# Garbage Route (Android APK Source)

This package contains the complete source code and native Android wrapper for **Garbage Route**.

## How to Build the APK on your Samsung Galaxy S26:

1. In your GitHub repository (\`garbage-route\`), ensure \`.github/workflows/build.yml\` is present.
2. The GitHub Action will automatically run and compile the APK in ~2 minutes!
3. Go to the **Actions** tab on your GitHub repository.
4. Tap the workflow run, scroll down to **Artifacts**, and download **Garbage-Route-APK**.
5. In Samsung **My Files > Downloads**, tap \`app-debug.apk\` to install.
`;

// Gather all files dynamically from Vite raw imports
const dynamicRawFiles = import.meta.glob<string>(
  [
    '/src/**/*',
    '/scripts/**/*',
    '/index.html',
    '/package.json',
    '/tsconfig.json',
    '/vite.config.ts',
    '/EXPORT_AND_BUILD_GUIDE.md',
  ],
  { query: '?raw', import: 'default', eager: true }
);

/**
 * Generates and triggers download of the complete source zip archive
 */
export async function downloadProjectZip(): Promise<void> {
  // 1. Try to fetch the pre-packaged full project zip with fresh compiled assets
  try {
    let res = await fetch(`/Garbage_Route_Source.zip?v=${Date.now()}`);
    if (!res.ok) {
      res = await fetch(`/OsmAnd_Route_Companion_Source.zip?v=${Date.now()}`);
    }
    if (res.ok) {
      const blob = await res.blob();
      if (blob.size > 100000) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Garbage_Route_Source.zip';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 2000);
        return;
      }
    }
  } catch (err) {
    console.warn('Prebuilt zip fetch failed, generating dynamically in-browser:', err);
  }

  const zip = new JSZip();

  // 2. Add all dynamic source files
  for (const [rawPath, content] of Object.entries(dynamicRawFiles)) {
    const cleanPath = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
    if (typeof content === 'string') {
      zip.file(cleanPath, content);
    }
  }

  // 2. Add native Android wrapper files
  zip.file('android/settings.gradle.kts', ANDROID_SETTINGS_GRADLE);
  zip.file('android/build.gradle.kts', ANDROID_ROOT_GRADLE);
  zip.file('android/app/build.gradle.kts', ANDROID_APP_GRADLE);
  zip.file('android/gradle.properties', ANDROID_GRADLE_PROPERTIES);
  zip.file('android/app/proguard-rules.pro', ANDROID_PROGUARD_RULES);
  zip.file('android/app/src/main/AndroidManifest.xml', ANDROID_MANIFEST);
  zip.file('android/app/src/main/res/values/strings.xml', ANDROID_STRINGS_XML);
  zip.file('android/app/src/main/res/values/colors.xml', `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#051d08</color>\n</resources>\n`);
  zip.file('android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml', `<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n    <background android:drawable="@color/ic_launcher_background" />\n    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n</adaptive-icon>\n`);
  zip.file('android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml', `<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n    <background android:drawable="@color/ic_launcher_background" />\n    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n</adaptive-icon>\n`);
  zip.file('android/app/src/main/java/com/routecompanion/app/MainActivity.kt', MAIN_ACTIVITY_KT);
  zip.file('android/app/src/main/java/com/routecompanion/app/OsmAndNavigationBridge.kt', OSMAND_BRIDGE_KT);

  // 3. Add GitHub Actions builder workflow (both paths for convenience)
  zip.file('.github/workflows/build.yml', GITHUB_WORKFLOW);
  zip.file('.github/workflows/build-apk.yml', GITHUB_WORKFLOW);
  zip.file('README.md', README_MD);

  // 4. Generate zip blob
  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  // 5. Trigger browser download on Samsung phone
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Garbage_Route_Source.zip';
  document.body.appendChild(a);
  a.click();

  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 2000);
}

