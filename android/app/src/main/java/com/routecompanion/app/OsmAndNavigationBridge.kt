package com.routecompanion.app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.util.Log
import androidx.core.content.ContextCompat

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
        } catch (e: Exception) {}
    }
}
