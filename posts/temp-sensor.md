---
title: 'Thermometer'
date: '2022-07-21'
tags:
  - thermometer
---

Why buy a $10 thermometer when you can spend $100 and build one yourself in 15-20 hours?

![Thermometer](/images/thermometer/thermometer.jpg)

Caitlin kept saying the thermostat was off so I build this to find out. As a bonus, it also tells me my house is too humid so now I have to also figure that out. Fun.

I was stubborn and wanted to use an attiny85 regardless of whether it was a good idea or not.
5 pins isn't enough to control the display so I used a shift register as an IO expander to talk to the 1602 led display using SPI.

![Prototype](/images/thermometer/prototype.jpg)

The temp/humidity sensor originally was an aht11 but apparently that unit is extremely sensitive to timing and I couldn't quite get it right with the attiny. I switched to an AM2301B and that used i2c for communication and worked really well.

First try I soldered everything backwards but I eventually got it right.

![Board](/images/thermometer/board.jpg)

![Board2](/images/thermometer/board2.jpg)

![Board3](/images/thermometer/board3.jpg)

![Power Up](/images/thermometer/power-up.jpg)

The packing took forever and I ended up having to buy multiple project boxes to get the right size.

![Packaging](/images/thermometer/packaging.jpg)

![Assembly](/images/thermometer/assembly.jpg)

All done!

![Final](/images/thermometer/final.jpg)
