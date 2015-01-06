---
layout: post
title: Strategy Game Grid Movement
---

I've been working the past week on a (very rough) framework for a turn-based strategy game using Phaser.js. I got the movement code working today, and I thought it was worth sharing. 

A little demo of how the movement works is below. Click on a character (the smaller squares) to see all possible spaces to move (in blue) and places outside of the movement range that are within attack range (in red), and then click a blue square to move. 

The solid tiles are obstacles, and the tiles with an X are rough terrain that have double the movement cost of a plain tile. The green character is intended to be a melee unit and the pink character is an unit with 2 attack range. The red character is an "enemy" who currently doesn't have much of a brain.

Actual art coming "soon."

<center><iframe src="https://ezig.github.io/strategy-game" width="320" height="260" frameborder="0"></iframe></center>

<!--more-->

Obviously, this is far from being an actual game, but I'm quite excited to have the movement working. There are three main components to the movement:

1. **Finding Range**: Determining which tiles are within movement/attack range of a unit.
2. **Finding a Path**: If the user clicks on a tile in range, how does the unit get there?
3. **Following a Path**: Making the unit actually move to the target.

The third part wasn't too hard – once I had the path, I could make the unit animate along the path in steps. But the first two parts caused a lot of trouble and ended up being far more related than I first realized.

I tried a number took of different approaches to find one that actually works, and my current approach finds the range and constructs paths together in the same process. One of the biggest challenges is that I made the attack range insensitive to terrain – otherwise, a melee unit couldn't attack from one rough terrain space to an adjacent one! Dealing with attacking through obstacles (which you can see by moving the pink unit around) also caused some trouble.

My first thought was just to use a (depth-limited) [flood fill](http://en.wikipedia.org/wiki/Flood_fill) algorithm to find the range. The main problem with this was that the flood fill didn't really have a particular sense of "outward" movement because it was depth-first. This made it difficult to determine which space were in the movement range and which were in the attack range.

To resolve this, I switched to a rather depth-limited [breadth-first](http://en.wikipedia.org/wiki/Breadth-first_search) search. This had a clear outward search and did not revisit grid spaces that had already been searched. It was easy to distinguish between movable and attackable spaces, and it was easy to build paths as the search was going. Whenever the algorithm reached a tile, I assigned the tile a property to keep track of the tile the search came from. Then from any given tile, I could follow the references back to the player to reconstruct a path.

For a while, it seemed like this approach was working, until I tested out the code in the very rough region in the western part of the map above. I quickly discovered that some spaces that should be reachable were not being found.

After struggling with the problem for a while, I finally realized that the search was never guaranteed to find the _best_ path to a space because it never revisited a space. After it found one path to a space, it never looked back. Some spaces are only reachable by a specific best path through other spaces, and these paths were never considered. 

Thus, I refined the search to revisit tiles if a better (i.e. lower-cost) path was found, which ensured that the _best_ path to every reachable space was found. Further, I simplified the search by worrying about whether a space was movable or attackable outside of the search, and simply assigning a depth value to each space.

Now that the movement is finally working, I'm going to work on actually adding gameplay!

If you're interested, the source code is [here](https://github.com/ezig/strategy-game)!