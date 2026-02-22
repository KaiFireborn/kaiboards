---
title: "Why use a tiny keyboard?"
description: |
  Traditional ~100-key keyboards have some ergonomic/efficiency disadvantages. Counterintuitively, these can be solved by cutting keys away...
date: "2026-12-09"
---

# Why a small keyboard?

Traditional keyboards have around ~100 keys. Reasonable, right? A keyboard should control many function.

Not necessarily. Think about how much you move your around when doing more than simply typing letters; Think of how you need to stretch your fingers to reach certain keys.
But many of those keys are used rarely anyway, you say. When was the last time you used `f7`?
Sure, but this is not true for some keys that are _useful_ after all: escape, the navigation cluster. But maybe this is exactly the reason why they are used less than they could be - one tends not avoid doing what requires a superfluous effort - even it were more efficient (using the nav keys is like having Vim in any text field - much better than pointing and clicking!).
Even the number keys require a bit of a stretch.

The solution is to cut stuff away. Get rid of the function row, numpad, of the navigation cluster, of the number and modifier rows (depending on how radical you're feeling. As for the now-missing modifiers issue, there are a bunch of [interesting takes on the solution](hrm-alternativsTODO)).
You end up with a 40-key keyboard. You don't have to move or skew or tilt your hands anymore, which means much less strain: your fingers always remain on the homerow.

But how to use the nav cluster or function keys? How to type numbers?

Here, layers come in. When you hold Shift, a layer is activated, turning `a` into `A` and `1` into `!`. You can setup layers for other keys with the same idea (directly in your keyboard's firmware or with OS-specific ([AHK](https://www.autohotkey.com/), [Kanata for Windows](https://github.com/jtroo/kanata), [KMonad for MacOS](https://github.com/kmonad/kmonad)). By using custom keybinds you could do a less extreme version of this - for example make `AltGr+u` result in `ü`).

You add a couple keys back on for the layers (potentially on the thumbs, which are wasted on only the spacebar anyway). These can toggle the layers like CapsLock or activate them when held like Shift (there are some more advanced options, too). Then we design some layers: one for symbols, one for numbers, one for function keys, one for navigation keys, and so on - mix and match however you find it makes sense.
For some inspiration, compare with layouts that match your physical keyboard on [keymapdb.com](https://keymapdb.com), popular layer layouts like [Miryoku](https://github.com/manna-harbour/miryoku) or check out the layouts of my keyboard projects outlined in [Projects](TODO).

Now you might have your arrows keys directly over the homerow where your right hand rests anyway, and the numpad under your left. Much easier and healthier than moving your _whole_ hand to the right or stretching your fingers up to reach those same keys, instead of just holding one more key.

The one thing that remains to be said is not to go overboard if it doesn't feel right: you can keep your number row if you want. You can keep your traditional navigation cluster if it's more comfortable to move your hand over rather than hold yet another key with your thumb - but I definitely encourage you to at least try out smaller layouts, even if you keep the rest of the keys as a fallback.

# Summary:

To avoid stretching your fingers and moving your hands unnecessarily you can move the function, number, navigation, symbol and other keys onto layers over/under your letter keys (and especially the homerow). These can then be activated with additional (thumb) keys just like `Shift` activated the "capital letters" layer.
With this, you can customize and personalize your layout, and optimize it for your own comfort, health and efficiency.

This can be done on custom or purchased ergonomic keyboards, but also just as easily on any device with special software if you'd like to noncommittally try these out.
