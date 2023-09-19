# cc3-transform-adapter
CocosCreator 3.X module that allows you to carefully adjust the size and position of nodes based on the size of the screen, the parent and the node itself.

The module allows you to set various settings depending on the screen aspect ratio (use the size ratio field for this).
You can operate with the following values ​​to configure node transformation:
- px - pixels
- sw - self width (percentage)
- sh - self height (percentage)
- pw - parent width (percentage)
- ph - parent height (percentage)
- vw - view width (percentage)
- vh - view height (percentage)

Also using this module you can set the sizes and coordinates of nodes both using specific values ​​and using mathematical expressions. For example: (100vw - 50px) * 2. The following operations are supported: addition, division, multiplication and division.


All fields of this component have detailed tooltips in the inspector, in them you can always find out which units of measurement are supported by a specific field.

You can see [DEMO here](https://juanowen.github.io/cc3-transform-adapter/index.html)
