---
title: Apple Remote A1156 + Intel NUC + Kodibuntu 14 (Helix) + ir-keytables
category: "unix"
cover: photo-1456518563096-0ff5ee08204e.jpg
author: crsantos
---

# Apple Remote A1156 + Intel NUC + Kodibuntu 14 (Helix) + ir-keytables

![unsplash.com](./photo-1456518563096-0ff5ee08204e.jpg)
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@carlosirineu?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Carlos Irineu da Costa"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Carlos Irineu da Costa</span></a>

Since I’ve spent a lot of time studying how the hell could I reuse my dumped white Apple Remote again, I had to write a tutorial for NO ONE ever waste that amount of time again.

Since I tried several approaches, I advice you to don’t touch any LIRC stuff, or inputlirc. Stay with ir-keytables! It’s very simple!

## Setup

### Installing ir-keytable

```bash
sudo apt-get install ir-keytable
```

List your IR receiver with the following command:

```bash
sudo ir-keytable
```

And you’ll see something like this:

```bash
Found /sys/class/rc/rc0/ (/dev/input/event4) with:
 Driver ite-cir, table rc-rc6-mce
 Supported protocols: NEC RC-5 RC-6 JVC SONY SANYO LIRC other
 Enabled protocols: NEC RC-6
 Name: ITE8713 CIR transceiver
 bus: 25, vendor/product: 1283:0000, version: 0x0000
 Repeat delay = 500 ms, repeat period = 125 ms
```

With that info we can get the driver’s name (**_itecir_**), supported protocols and even the transceiver name,(**_ITE8713_**) that we’ll need later.

### Keymapping

So we need to translate the keystrokes into actions, so we can test keystrokes with the following command:

```bash
sudo ir-keytable -p NEC,RC6 -t
```

Click on some keys on your remote and take notes of each hexadecimal code output that is shown on the console, like the following:

```bash
1422203031.291478: event type EV_MSC(0x04): scancode = 0x77e190e6
1422203032.349079: event type EV_MSC(0x04): scancode = 0x77e130e6
```

Those two, will be your addresses to the keys. So let’s create a mapping file. Actually we’ll need 2: one for ir-keytables, another for KODI (to be able to be translated to its internal commands). So let’s start with the ir-keytables mapping file:

```bash
sudo vim /etc/rc_keymaps/apple_remote
```

And insert the keys you want (as these are my addresses, yours could be different, so pay attention to the previous test where I asked you to note down the hex addresses). Add keys like these:

```bash
==> apple_remote <==
# Apple Remote
0x77e150e6 KEY_UP
0x77e130e6 KEY_DOWN
0x77e190e6 KEY_LEFT
0x77e160e6 KEY_RIGHT
0x77e1a0e6 KEY_ENTER
0x77e1c0e6 KEY_ESC
```

Now we’ll create the KODI key mapping file:

```bash
vim ~/.kodi/userdata/Lircmap.xml
```

And add the following:

```xml
<lircmap>
 <remote device="Apple_Remote_A1156">
  <up>KEY_UP</up>
  <down>KEY_DOWN</down>
  <left>KEY_LEFT</left>
  <right>KEY_RIGHT</right>
  <play>KEY_PLAY</play>
  <menu>KEY_MENU</menu>
  <select>KEY_OK</select>
 </remote>
</lircmap>
```

### Startup script

Now we just need to add a little startup script that will set the keymaps at startup. I used a service, but you can use whatever you want as long as it runs on startup:

Pay attention to your **device id**, you must have noted earlier: my NUC’s receiver is ITE8713.

If you opt for a `/etc/init.d/` script, please enter the following commands:

```bash
sudo vim /etc/init.d/make-ir-work
```

Add the following text:

```bash
#!/usr/bin/env bash
echo 'Modprobing...'
modprobe -r nuvoton_cir
sleep 1
echo 'Echoing...'
echo "auto" > /sys/bus/acpi/devices/ITE8713:00/physical_node/resources
#sleep 1
echo 'Modprobing...'
modprobe nuvoton-cir
sleep 1
echo 'Clearing the old keytable...'
ir-keytable -c
sleep 1
echo 'Injecting the new keytable...'
ir-keytable -p NEC,RC6 -w /etc/rc_keymaps/apple_remote
echo 'Done.'
```

Check that with that command we’re enabling NEC/RC6 modules and applying the apple_remote keymap.

Now just make it executable:

```bash
sudo chmod a+x /etc/init.d/make-ir-work
```

And add it to the startup:

```bash
sudo update-rc.d make-ir-work defaults 99
```

The 99 means make-ir-work gets sequence number 99 at boot, the range starts on 1 and goes till 99, most boot scripts have smaller numbers, this ensures this script has all its dependencies ready.

And now it’s reboot time!

### Smoke test

Make a smoke test, ensure that when running:

```bash
sudo ir-keytable -p NEC,RC6 -w /etc/rc_keymaps/apple_remote # adds a new mapping
```

You’ll see something like:

```bash
> Wrote 8 keycode(s) to driver
```

Have fun with your Apple Remote! The bad thing is… the remote hasn’t that much keys to play with KODI, but it saves an electronic piece from trash.

### Sources

* https://forums.plex.tv/index.php/topic/110971-definitive-intel-nuc-how-to-guide-surround-sound-over-hdmi-apple-remote-graphics-part-2/
* http://forum.kodi.tv/showthread.php?tid=101151
* http://kodi.wiki/view/HOW-TO%3aSetup_an_MCE_remote_control_in_Linux
