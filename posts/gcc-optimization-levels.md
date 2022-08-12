---
title: 'GCC Optimization Levels'
date: '2022-08-10'
tags:
  - debugger
  - gcc
  - avr
---

Optimization levels are really weird.

Using the function and compiling for an attiny85, ie [`--mmcu=attiny85`](https://www.nongnu.org/avr-libc/user-manual/using_tools.html).
```
int main(void) {
    int i = 0;
    while(i < 10000) {
        i++;
    }
}
```

We can disassemble with `avr-objdump -sS -m avr25 led`. As a disclaimer, I'm not pretending I know what any of this means.

Using `-Os` ie optimize for code side, it looks like the entire function is optimized away!
```
> avr-objdump -sS -m avr25 led
...
00000030 <main>:
{
    int i = 0;
    while(i < 10000) {
        i++;
    }
}
  30:	90 e0       	ldi	r25, 0x00	; 0
  32:	80 e0       	ldi	r24, 0x00	; 0
  34:	08 95       	ret
```

And by comparison, using `-O0`, fastest compile time and the gcc default:
```
00000030 <main>:
// #include "wait.h"

int main(void) {
  30:	cf 93       	push	r28
  32:	df 93       	push	r29
  34:	00 d0       	rcall	.+0      	; 0x36 <L0^A>

00000036 <L0^A>:
  36:	cd b7       	in	r28, 0x3d	; 61
  38:	de b7       	in	r29, 0x3e	; 62

0000003a <.Loc.1>:
    int i = 0;
  3a:	1a 82       	std	Y+2, r1	; 0x02
  3c:	19 82       	std	Y+1, r1	; 0x01

0000003e <.Loc.2>:
    while(i < 10000) {
  3e:	05 c0       	rjmp	.+10     	; 0x4a <.L2>

00000040 <.L3>:
        i++;
  40:	89 81       	ldd	r24, Y+1	; 0x01
  42:	9a 81       	ldd	r25, Y+2	; 0x02
  44:	01 96       	adiw	r24, 0x01	; 1
  46:	9a 83       	std	Y+2, r25	; 0x02
  48:	89 83       	std	Y+1, r24	; 0x01

0000004a <.L2>:
    while(i < 10000) {
  4a:	89 81       	ldd	r24, Y+1	; 0x01
  4c:	9a 81       	ldd	r25, Y+2	; 0x02
  4e:	80 31       	cpi	r24, 0x10	; 16
  50:	97 42       	sbci	r25, 0x27	; 39
  52:	b4 f3       	brlt	.-20     	; 0x40 <.L3>
  54:	80 e0       	ldi	r24, 0x00	; 0
  56:	90 e0       	ldi	r25, 0x00	; 0

00000058 <.Loc.5>:
    }
}
  58:	0f 90       	pop	r0
  5a:	0f 90       	pop	r0
  5c:	df 91       	pop	r29
  5e:	cf 91       	pop	r28
  60:	08 95       	ret
00000030 <main>:
// #include "wait.h"

int main(void) {
  30:	cf 93       	push	r28
  32:	df 93       	push	r29
  34:	00 d0       	rcall	.+0      	; 0x36 <L0^A>

00000036 <L0^A>:
  36:	cd b7       	in	r28, 0x3d	; 61
  38:	de b7       	in	r29, 0x3e	; 62

0000003a <.Loc.1>:
    int i = 0;
  3a:	1a 82       	std	Y+2, r1	; 0x02
  3c:	19 82       	std	Y+1, r1	; 0x01

0000003e <.Loc.2>:
    while(i < 10000) {
  3e:	05 c0       	rjmp	.+10     	; 0x4a <.L2>

00000040 <.L3>:
        i++;
  40:	89 81       	ldd	r24, Y+1	; 0x01
  42:	9a 81       	ldd	r25, Y+2	; 0x02
  44:	01 96       	adiw	r24, 0x01	; 1
  46:	9a 83       	std	Y+2, r25	; 0x02
  48:	89 83       	std	Y+1, r24	; 0x01

0000004a <.L2>:
    while(i < 10000) {
  4a:	89 81       	ldd	r24, Y+1	; 0x01
  4c:	9a 81       	ldd	r25, Y+2	; 0x02
  4e:	80 31       	cpi	r24, 0x10	; 16
  50:	97 42       	sbci	r25, 0x27	; 39
  52:	b4 f3       	brlt	.-20     	; 0x40 <.L3>
  54:	80 e0       	ldi	r24, 0x00	; 0
  56:	90 e0       	ldi	r25, 0x00	; 0

00000058 <.Loc.5>:
    }
}
  58:	0f 90       	pop	r0
  5a:	0f 90       	pop	r0
  5c:	df 91       	pop	r29
  5e:	cf 91       	pop	r28
  60:	08 95       	ret
```

With `-O1`:
```
00000030 <main>:
// #include "wait.h"

int main(void) {
  30:	80 e1       	ldi	r24, 0x10	; 16
  32:	97 e2       	ldi	r25, 0x27	; 39

00000034 <.L2>:
    int i = 0;
    while(i < 10000) {
  34:	01 97       	sbiw	r24, 0x01	; 1

00000036 <.LVL2>:
  36:	f1 f7       	brne	.-4      	; 0x34 <.L2>

00000038 <.Loc.8>:
        i++;
    }
}
  38:	90 e0       	ldi	r25, 0x00	; 0
  3a:	80 e0       	ldi	r24, 0x00	; 0

0000003c <.LVL3>:
  3c:	08 95       	ret
```

And finally with `-O2` and `-O3` we are back to optimizing everything away:
```
00000030 <main>:
int main(void) {
    int i = 0;
    while(i < 10000) {
        i++;
    }
}
  30:	90 e0       	ldi	r25, 0x00	; 0
  32:	80 e0       	ldi	r24, 0x00	; 0
  34:	08 95       	ret
```

So I guess the TLDR here is try and test them all?

The case where the entire function is optimized away seems funny to me, what if you hand rolled a sleep with a big loop? Wouldn't that be grand if it just disappeared?
