---
title: Basic 2D Unity Harpoon Game
date: 2025-05-22 9:30:00 +/-01000
categories: [C#, Unity]
tags: [game development, personal]     # TAG names should always be lowercase
description: The Unity project I've developing
math: true
---

Heya, I've decided to share a project I've been toying with for the past few months. It's still in development, and far from what I want the finished product to look like, but I thought it'd be fun to share my process so far. So, welcome to the first devlog of "Untitled Harpoon Game" (name pending).

The core idea behind this project is a simple roguelike experience that's fairly small in scope. I thought it'd be important to ground myself for a project like this, and to avoid feature creep I've identified all the features I want to implement before really digging into them. I have a ton of ideas, and to avoid spoiling my future devlogs, I'll just keep them to myself for now. But how about I show you what I _have_ done?

The first step in any Unity project was creating simple movement, which really took no time at all. I then went straight to work on the harpoon -- the main draw to my game. I thought it was incredibly important to have a mechanic that felt good to the player. It was essential to really nail the basics before going ahead with any other aspects of design, so I spent a lot of time fine tuning.

After quickly putting together a crosshair aiming system, I created a method in the `CharacterController` class called `PullPlayer()` which does exactly what the name implies. Whenever the player "shoots" a harpoon that successfully collides with an enemy, the `HarpoonScript` calls the Player's `PullPlayer()` method, which then pulls the player to the enemy's location.

Creating fluid in player movement is very important to me, so I wanted the harpoon to pull the player slowly at first, but accelerating as they build up more momentum. To do this, I modeled the harpoon's pull speed $p$ with the following formula:

$$p = 1.3^{x + 10}, 0 < x < 5$$

Where, for every frame of being pulled, the speed variable $x$ is increased by 0.5 until it plateaus at $x=5$, resulting in a max pull speed of $\approx 51.186$ $\text{tiles/frame}$. This resulted in the exact feel I was going for, and led to a really dynamic feeling movement mechanic. Though, there was still something missing...

It's here that I took a little break from working on the harpoon mechanic to figure out other game elements. I kept the artstyle of the game really basic, to the point where there was no need for any placeholder sprites, as anything I'd whip up in the moment was good enough to use in the final build. This way, I was able to create shells of new mechanics I'd come back to build on later.

The first of which being the basic enemy, which at the moment follow the player in a straight line and lack any intelligent pathfinding (something that would look quite silly once I had the tilemap properly implemented). I was originally just going to download a library, but I think it'd be more fun to tackle the pathfinding myself further down the line, so these dumb little robots will have to do for now.

Next, I worked on the basis for the upgrade system. I wasn't quite sure of _every_ upgrade I'd be working on, so I created a basic harpoon level up. It'll increase your harpoon's level when collected, which at the moment is purely cosmetic, simply changing the color of your harpoon from white to blue. I also implemented a currency system wherein eliminating enemies gives you coins, though the functionality is not yet implemented into the game.

Finally, before getting back to fine-tuning the movement, I created an alternate weapon for the player. While the harpoon is a fun mechanic, given the player more choice never hurts. For that reason, I implemented an alternate weapon that can be used when right-clicking. While quite effective against enemies, it runs out of ammo fast and has horrible spray. Often your bullet will be aimed up to 15° off-target, though I thought this was a good tradeoff for the high fire-rate and knockback inflicted on targets. The gun refills its ammo on enemy elimination, incentivizing regular use of the harpoon gun.

[TO BE CONTINUED]
