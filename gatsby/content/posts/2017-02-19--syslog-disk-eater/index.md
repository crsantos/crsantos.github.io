---
title: Syslog disk eater - Ubuntu Xenial and Kodi 17.0
category: "kodi"
cover: photo-1507915600431-5292809c5ab7.jpg
author: crsantos
---

# Syslog disk eater: Ubuntu Xenial and Kodi 17.0

If you’re running into low disk space when using Kodi 17.0 on Ubuntu Xenial, you’re probably having your /var/log/syslog filled up with some error logging about a python-cryptography error…

```python
extern "Python": function Cryptography_rand_status() called,
but @ffi.def_extern() was not called in the current subinterpreter.
Returning 0
```

# Quick fix

You can upgrade your python 🐍 libs python-cryptography and python-openssl to the latest version available. 💪

Seems that these prints completely ignore logrotate rules so upgrading the libraries should work.

I’m using the Unstable channel for Kodi as the stable lasts forever to get updated with the latest releases.

⚠️ Avoid nightlies channel if you don’t want to end up with a non-working Kodi on your HTPC machine ⚠️
