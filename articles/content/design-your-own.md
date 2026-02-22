---
title: 'Creating your own keyboard - the options spectrum'
description: 'When getting a new keyboard, you can do anything between ordering a traditional one over purchasing an ergonomic build to designing and making every aspect yourself. How do I choose? What options and tools are there? Where do I start?'
pubDate: '2025-12-04'
coverImageCredit: 'Unknown'
---

# Mass-produced

Straight-forward: just buy a keyboard.

# Kit (preassembled, DIY)
Some vendors sell kits of parts needed for a keyboard of their design, together with assembly instructions and firmware. These are often reasonably configurable, although you'll often buy switches/keycaps separately by factors outlined in (TODO: link switches/keycaps article).

The easy and quick (but more expensive on-paper) option here is to buy the kit pre-assembled (most of these vendors offer this). Recommended if you just want an (ergonomic) keyboard without massive initial time-investment.

The interesting option where you'll end up picking up a number of new skills is buying the kit and building it yourself. You'll get more soldering, electronics and potentially firmware practice; The tools will be worth the price if you continue working on similar projects in the future (and trust me - one can never build enough keyboards).

Another advantage of this is being able to even build a keyboard for which no one sells all parts in a nice, singular package:

# Open-Source

If you build the keyboard yourself, you can naturally get all parts from a popular or niche open-source project, then purchase the parts piece-by-piece yourself. This gives you a much larger selection to find the keyboard that's right for you and opens some new doors, but of course means plenty more work.

Of course, if you can download part schematics and printing files you can also just make them yourself. This brings us to the next section:

# Designing a keyboard yourself
A great project, especially if you've built a kit or two already and have some ideas for better personal ergonomics/aesthetics that don't seem to be offered by any sellers. Some trial and error and learning frustration can't be avoided, but by not being afraid to redo a part or two and referencing existing projects, you're sure to reach your goal soon enough! 

Writeups about my own custom keyboard projects can be found in (TODO)


### PCB vs handwiring
You can handwire (TODO: handwired keyboard image) by soldering wires and diodes manually to every connection by a previously created plan (TODO: links to further articles/resources). This doesn't require much learning but is tedious and it's hard to fix mistakes.

The alternative is to design a PCB (TODO: lkinks to articles) for example with KiCad, then order your files to be printed at a service like [JLPCB](https://jlcpcb.com/). In general, I'd say this makes the overall process somewhat easier; Learning KiCad is not as big of an investment as it seems to be (TODO: see tutorials on YT)

### Case
A case will be between some switches and the PCB/wiring. Main reasons to have one is safety for your electronic components and aesthetics (colors, shape design, premium feel/weight or material, e.g stainless steel). It's possible to go without a case if you use a PCB as a skeleton; With a handwired keyboard, the case's top plate is what keeps the kaluminumeyboard in one piece.

You can design one in CAD Software like FreeCAD or Fusion360 (TODO: YT tutorials exist), then get it 3D-printed at a local service or own printer.

### Sourcing other parts
for example for cheap from AliExpress or from small keyboard vendors who sell parts alongside kits:
- MCUs (pro-micro, arduino, (nice!nano for wireless) alternatives)
- diodes, wires, sockets for the bigger parts
- reset buttons, potentially switches and batteries
- TRRS jacks and cables, USB-C cable potentially resistors
- potentially i2c gadgets like tiny displays or touchpad/etc modules, etc
- of course keyboards and switches


### Firmware
The most frequently used options are [QMK](https://qmk.fm/) and [ZMK](https://zmk.dev/) (choose the latter if you want a wireless keyboard). Use the docs or open-source examples to get your own firmware going, or modify the code provided by kit vendors.

### Needed tools
- Software as mentioned above (CAD, PCB design, code editor)
- soldering iron etc TODO