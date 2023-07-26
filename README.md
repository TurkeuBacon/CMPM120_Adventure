A simple adventure game by Gabriel Bacon based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: waddleTo. Moves a sprite to the target position with a waddle animation as well as easeing in and out the movement tween.
    - Enhancement 2: shakeObject. Shakes an object side to side. This animation is used a few times in most scenes.

Experience requirements:
- **4+ locations in the game world**: Room1(Cave Entrance), Room2(Underground River), Room3(Bottomless Pit Chamber), Room4(Avocado Hoard).
- **2+ interactive objects in most scenes**: The spoon can be picked up in Room1 and the rocks can be pushed away.
- **Many objects have `pointerover` messages**: The rocks in Room3 have messages depending on your progress. The assorment of avocados in Room4 have a random message from a list defined in the class.
- **Many objects have `pointerdown` effects**: Eating Avocados, Picking up the spoon.
- **Some objects are themselves animated**: Richard waddles whenever he moves. When the spoon is lost, it flies away with a spinning animation.

Asset sources:
- Each image asset was created in GIMP. For the backround images I just drew what looked like a cave. For the otehr images I used a lower resolution canvas to create pixel art.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
