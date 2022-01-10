# 100 Days Of Code - Log

### Day 0: January 8 2022 

**Today's Progress**: Setup vs code and got started with github integration. Also re-wrote some javascript to chage the color background of a page in response to a click event. 

**Thoughts:** Syntax and remembering the commands will be the biggest hurdle. I remembered using [] to define arrays but I don't recall using const before variables. Maybe it's been too long. Maybe I'm just too used to VEX

**Link to work:** [Color Change script] https://github.com/Grayxyz/project_change_color_background.git

### Day 1: January 9 2022 

**Today's Progress**: 
Javascript: created a farenheit to celsius calculator from scratch.
Houdini: learned new Karma ROP. Learned scene import to Solaris. Opted to render in old ROP context for now. Cached fluid sim to disk. Saved sim with skin as file cache. Multiple cache deletions and restarts. Removed deprecated principled shaders and replaced with materialX standard surface shaders. Still caching, not ready to render. May try XPU for look dev tomorrow. 

**Thoughts:** 
Javascript: As it always goes with code, it's the small things that get you stuck. I kept getting NaN when clicking the submit button but couldn't figure out why. It turns out I needed to tell it specifically what to get with document.getElementById("degreesF").value. It was the .value that brought it all together.

Houdini: thoughts? I'm ready to be done with these huge cache files and endless ROP shit 8 and focus on modeling and real-time in UE5. It is nice that Karma is production ready though.

**Link to work:** [Farenheit to Celsius Calculator] https://github.com/Grayxyz/100-days-of-code/blob/master/day_1_FtoC_calculator/FarenheitToCelsius.html