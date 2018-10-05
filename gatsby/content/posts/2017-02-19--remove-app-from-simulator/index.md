---
title: Remove app from iOS Simulator
category: "ios"
cover: photo-1489824904134-891ab64532f1.jpg
author: crsantos
---

# Remove app from iOS Simulator (terminal based)

If you ever need to remove an app from the iOS Simulator (let’s say your CI environment needs a clean install of the app) just hit:

```bash
xcrun simctl uninstall booted com.example.app
```

Where `com.example.app` is the bundle id of the application you want to remove
