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

### Day 2: January 10 2022 

**Today's Progress**: 
Started calculator project. Got hung up on some new CSS I'm not familiar with. Setup HTML and working through CSS grid styling for calculator. Also looked into Swift playgrounds on the iPad but decided to stay focused on Javascript for now. Watched an overview on the structure of javascript and learned about some updated syntax since I last studied it
**Thoughts:** 
Today was kind of a day off anyway but I'm more behind than I thought I was in terms of new functionality in CSS and new syntax in Javascript. Also, Still struggling with git. I think I need to sit down with a full video or something just on using git and what all the terms mean

**Link to work:** [Javasript Calculator] https://github.com/Grayxyz/Calculator

### Day 3: January 12 2022 

**Today's Progress**: 
Completed the javascript calculator tutorial at https://www.youtube.com/watch?v=j59qQ7YWLxw&t=595s
completed w3c tutorial on JavaScript Classes
completed w3C tutorial on .splice() and its arguments
setup w3c space (will probably move to my own site instead)

**Thoughts:** 
Yeah, missed yesterday so I made up for it by doing a whole day of Javascript instead of just an hour. Had difficulty with the display on the calculator not showing up but managed to track it down to a missing ]. Need to remember not to get overly reliant on VS code's assistance as it doesn't always add closing brackets. otherwise, the only other issue was that I kind of got ahead of the tutorial wondering why the all clear wasn't working. I just needed to watch further to add an else statement but I'm kind of proud that I figured that out before getting to it in the video

**Link to work:** [Javasript Calculator] https://github.com/Grayxyz/Calculator, https://drewmacstudio.w3spaces.com/jsCalculator/calculator.html

### Day 4: January 13 2022 

**Today's Progress**: 
Started personal portfolio site. Caught up on semantic elements <header><section> etc. Built HTML basis for home page. Watched video on python for web development. 

**Thoughts:** 
Less progress today but yesterday was probably good enough for a week. Starting back up with basic portfolio site like I used to make. Some features I'd like to add:

change header imeage on load (javascript)
nav bar that hides in hamburger menu on scroll down and appears on scroll up 
Template for project pages
contact form (python?)


**Link to work:** No link today :(

### Day 5: January 14 2022 

**Today's Progress**: 
Starting work on a dynamic hero image that changes on load. Researched JSON syntax, retrieving data from external files, JSON.parse() and JSON.stringify
Not sure yet how to use an array, if I use myArray[0].name or what. Stored sample images and titles in JSON array file. Tomorrow, figure out how to use JSON array, randomly select image link and insnert it into hero style on load.

**Thoughts:** 
Let's stick with Javascript for now and save Python for Houdini, when the sim is done rendering and I can take that long houdini python class. For now I need to look at more advanced ways of storing and retrieving data for javascript. 


**Link to work:** No link today :(

### Day 6: January 16 2022 

**Today's Progress**: 
Rebuilt x,z axis ramp control in VEX. Couldn't get color working in master attribute wrangle using VEX to pull from master controll null. Used color and linked other color nodes to main via relative references. Color on makrer caps didn't work on the final model though after recombined in the end. 

**Thoughts:** 
I need to get started with Python and consolidate languages. I use VEX just infrequently enough to constantly be relearning the same things. The variable declarations versus attribute declarations still confuse me, as do the parameters certain attributes are asking for. like why need @curveu? And why have @scale and @pscale be different? Does @pscale really have to be uniform? could we not just have one vector attribute and consistently set vector values like @scale set (1,1,1);

Anyway, slowed me down. Reinvented the wheel. Need to get Python running so I can use it in both web and in Houdini. 


**Link to work:** No link today :(

### Day 7: January 17 2022 

**Today's Progress**: 
Connected portfolio to git repository, researched hosting. Moving forward with github pages for now. Studied Apple shortcuts and runnign javascript on pages to scrape. Not exactly standard scraping. 

**Thoughts:** 
Github is a pain in the ass. No idea why it acts like it's connected to a repository and syncing, when the repository doesn't exist. Then have to delete the entire folder and start over and still it seems clunky. Need to do a class or watch a video on push/pull/clone/commit/branch/remote/ etc.


**Link to work:** No link today :(

### Day 8: January 23 2022 

**Today's Progress**: 
built structure for javascript hero image slide show.

**Thoughts:** 
Missed a few days but back at it. I still can't get the JSON linking to work. No idea why. Going to have to try to stay simpler for now. I'm gping to add this project to my website.


**Link to work:** No link today :(

### Day 9: January 23 2022 

**Today's Progress**: 
Added homepage layout for portfolio site. Moved practice demos to 100days of code folder

**Thoughts:** 
Lots going on, video projects, 3D. haven't had much time to code. But I need to get the new portfolio site up fast and focus on HTML and CSS for now


**Link to work:** 

### Day 10 February 18 2022 

**Today's Progress**: 
Completed  

**Thoughts:** 
Lots going on, video projects, 3D. haven't had much time to code. But I need to get the new portfolio site up fast and focus on HTML and CSS for now


**Link to work:** 

### Day 11: February 25 2022 

**Today's Progress**: 
progress for the last 3 days: Rebuilt portfolio website in static html and css. Used Marmoset's javascript API to add a 3D model viewer to project pages. Built out css variables for theme control. Created firefox-specific themes for unsupported CSS properties, specifically background-filter.

created media queries for all templates to work on mobile devices

**Thoughts:** 
This will be a solid place to build out more back-end functionality as I work through the full stack course. Still need to add webkit properties for some things that aren't working in safari

also need to resolve an issue with nav bar links not stacking correctly on narrower screens after adding more links


**Link to work:** 
https://grayxyz.github.io/drewmacstudio

### Day 12: March 8 2022
**Today's Progress**;
Continued codecademy full stack course. Still just going through the HTML stuff that I already know. I need to see if I can just take quizzes to skip that stuff. 

Began the slideshow javascript example in the car. But I remembered I need to get Brea's site look- going to try to do that in Adobe XD.

**Thoughts**;
The codecademy stuff is way beneath me, which is good, but also kind of a waste of time if I can't skip it. The javascript arguments are starting to make more sense, like adding -1 as an argument for the plusSlide() function. plusSlide(-1) calls the same function but adds negative 1 so, yeah, easier than VEX attributes at any rate. But I guess it also makes attributes make some more sense to me. Like it's still declared as a variable but being @pscale is mor edynamic so each point has a dynamic scale value instead of arguments in JS, which, at least in this case, is static. 

Also, I need to be better about posting. I'm on a 7 day streak in Codecademy but I've missed my updates for almost 2 weeks on #100daysofcode.

**Link to work**;
will link on portfilio site. 

### Day 13: March 12 2022 ###
**Today's Progress**;
Codecademy lesson on tables in HTML. Does anyone use tables anywhere at all?

**Thoughts**;
I guess I can't do a quiz to skip this part since I don't know anything about HTML tables. 

### Day 14: March 13 2022 ###
**Today's Progress**;
Completed tables project on Codecademy
**Thoughts**;
Tables in HTML seem kind of messy now that css grids are a thing. Now that I've done it I'm not sure that it's particularly useful. It's going to require javascript to dynamically rewrite the HTML to make it responsive.

Still, I guess it's clarified the colspan and scope

**Link to work**;
https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-fundamentals-of-html/modules/wdcp-22-learn-html-tables/projects/html-wine-festival-schedule 

### Day 15: March 24 2022 ###
**Today's progress**;
Finished CSS box model section on codecademy full stack course. Now 5% complete. Added more components to Brea's website. 

**Thoughts**;

**Link to Work**;

## Day 16: April 15, 2022 ###
**Today's Progress**
CSS typography on Codecademy and made a gradient hover animation in CSS on Codepen.

**Thoughts**
I have coded every day since the last entry but haven't logged it SMH. So staying on the official count.

**Link To Work**

