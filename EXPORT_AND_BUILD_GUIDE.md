# Step-by-Step Guide: Build & Install on Samsung Galaxy S26

This guide walks you through building and installing your **OsmAnd Route Companion** as a native Android app (`.apk`) using only your Samsung S26 phone—with **no computer**, **no programming experience**, and **no paid subscriptions**.

---

## Step 1: Export Source Code from Google AI Studio

1. In Google AI Studio Build on your Samsung S26 browser:
2. Look at the top menu bar or top-right controls.
3. Tap the **Export / Download** button (or tap the `⋮` menu > **Download ZIP**).
4. Save the `.zip` archive to your Samsung **My Files > Downloads** folder.
5. In **My Files**, tap on the downloaded `.zip` and tap **Extract** to unpack it into a folder.

---

## Step 2: Set Up Free Cloud Build on GitHub (Using Only Your Phone)

Because an Android compiler requires high memory and CPU, we use GitHub's free cloud builder. You do not write any code—GitHub does it automatically in the cloud:

1. Open Samsung Internet or Chrome on your S26 and go to **[github.com](https://github.com)**.
2. Sign up for a free account (takes 1 minute).
3. Tap the **+** icon in the top right > **New repository**.
4. Name the repository: `route-companion` and select **Private** (or Public). Tap **Create repository**.
5. On the next screen, tap **uploading an existing file**.
6. Select and upload the extracted files from your phone. Tap **Commit changes**.

---

## Step 3: Download Your APK

1. On your GitHub repository page on your phone, tap the **Actions** tab at the top.
2. You will see a workflow named **"Build Android APK"** running (indicated by a yellow spinning circle).
3. Wait approximately 2–3 minutes until it turns into a green checkmark (**Passed**).
4. Tap the completed run.
5. Scroll down to the **Artifacts** section at the bottom.
6. Tap **OsmAnd-Route-Companion-APK** to download the `app-debug.apk` directly to your phone.

---

## Step 4: Install the APK on Samsung S26

1. Open the **My Files** app on your Samsung S26.
2. Go to **Downloads** and tap the downloaded `app-debug.apk`.
3. If Samsung One UI prompts: *"For your security, your phone is not allowed to install unknown apps from this source"*:
   - Tap **Settings** in the dialog.
   - Switch the toggle next to **My Files** to **ON**.
   - Tap the Back button.
4. Tap **Install**.
5. Once installed, tap **Open**.
6. When prompted, grant **Location Permission** (*"While using the app"*).

---

## Step 5: How OsmAnd Communicates with the Native App

1. Open **OsmAnd** on your phone.
2. Open **Route Companion** in **Samsung Split-Screen Mode**:
   - Swipe up and hold to open Recent Apps.
   - Tap the Route Companion app icon at the top of its card.
   - Tap **Open in split screen view**.
   - Select **OsmAnd** as the second app.
3. In Route Companion, tap **Import GPX** and select your `OsmAnd_Customer_Markers.gpx`.
4. Tap **Open in OsmAnd** on customer #1.
5. Because the app is now running as a native Android app:
   - The native Kotlin component binds directly to OsmAnd's background service (`net.osmand.aidl.OsmandAidlService`).
   - Turn maneuver arrows, street names, and distances update directly in the top panel!
   - 50-ft automatic arrival advance marks the stop done as you arrive.
