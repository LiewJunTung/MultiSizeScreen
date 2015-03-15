MultiSizeScreen jQuery plugin
===============================
This jQuery plugin is to allow user to simulate websites in multiple types of screen.

[demo: via JavaScript](http://plnkr.co/edit/K3S8ckRmqKPvaMml9HOb)
[demo: via data-screen and data-options](http://plnkr.co/edit/Lf99CAPZljnWM9UuaCi7)

Installation
-------------
1. _git clone_ to your directory and _bower install_. OR Add jQuery to your html files via CDN or download from their website.
2. Include both the responsive_screen.min.js and responsive_screen.min.css in your html file.
3. Create an iframe in your <body>;
4. Use .multiSizeScreen() using JavaScript to on any buttons to trigger the event *OR* use data-screen-size and data-screen-option
   in your HTML button element;


Usage
------
### HTML only
_Example:_
```
<button data-screen-size="iPhone">iPhone</button>
<button data-screen-size="iPad">iPad</button>
<button data-screen-size="desktop">desktop</button>
<button data-screen-size="custom" data-screen-option='{"width": "360px", "height": "640px", "padding": "45px 0"}'>Samsung</button>
```

### .multiSizeScreen(selector, [options])
_Description:_ Trigger an selector to various screen sizes.

> _.multiSizeScreen(selector)
> Type: Selector
> The specific element to be resized.
> example: .multiSizeScreen($('iframe'));

> _.multiSizeScreen(selector, [options])
> Type: Object
> The various options for the responsive display. 

### Options:
1. size: 
-description: Presets for multiple screen sizes.
-default: "iPhone"
-choices: 1. "iPhone", 2. "iPad", 3. "desktop", 4. "custom"
-example: .multiSizeScreen(selector, {size: "iPad"})

2. speed:
-description: The transition speed between various sizes.
-default: "slow"
-choices: 1. "slow", 2. "fast", 3. milisecond .. eg. 1000 for 1 second
-example: .multiSizeScreen(selector, {"speed": "slow"})

3. width, height, border-radius
-description: The custom width, height, and border radius for more choices
-default: the width, height, and border-radius of size "iPhone"
-example: .multiSizeScreen(selector, {size: "custom", "width": "1080px", "height": "720px"})
