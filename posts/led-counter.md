---
title: '7 Segment LED Counter'
date: '2022-07-15'
tags:
  - led
---

This was a funny project where I tried to build a simple 7 segment led counter without using a microcontroller. Each digit is controlled separately using 4026's and a sub 15 ms clock controlling which led is displayed, targeting a digit using a mux. 15 ms was chosen because it's faster than I could notice the counter changing, kinda like controlling led brightness using pwm. The counter ticks up based on a second slower clock or a button.

I isolated the clocks into separate modules using 555 timers, both of which took forever to solder. One was in a fixed astable mode, the other a toggle-able monostable button debouncer or a bi-stable latch.

Ran out of diodes on this one...

![LED Counter](/images/led-counter.jpg "LED Counter")
