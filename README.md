# udacity_viz
The Data Visualization project for Udacity.

## Summary
This project uses a dataset of 1000+ professional baseball players to
create a visualization showing the difference in performance among players. The
visualization aims to show that although being the most populous group, right
handed players, on average, do not have the highest performance levels.  
To view the final graphic and code:
http://bl.ocks.org/ohmgmatt/3a9c5b7312fbaf5bdfb68aeefc373c10


First Format bl.ock: http://bl.ocks.org/ohmgmatt/07e725be31dcd30317fac335a4a0b24d

Second Format bl.ock: http://bl.ocks.org/ohmgmatt/e3780509e22a598c405e342d289b4ba4


## Design
During my initial exploration of the data, I thought that a scatter plot of
the height and weight of a player on the x and y axis would be the best way to
show this graphic. I would have included one of HR or 'avg' as the radius of
the circle. To go further, I would have either used an interactive graph to
make transitions to the other performance variable or I would have used a color
scale to show the 2nd variable. This quickly created a jumbled mess and did
not create an easily legible graphic. I could not pull anything worth digesting
from it. I quickly decided to switch from a bivariate analysis to a univariate
one. This led to my first iteration of bar charts and comparison of each.

However, I still could not find a clear finding between weights/heights and
performance of a person. I asked my friend who knew baseball much more than I
and he suggested I take a look at their handedness. I did an initial analysis
early on but simply checked their count but not their averages. This lead me to
see a finding I wanted to do. However, I figured that it would only take me one
short simple graph. I wanted to tell longer story.

This is how I decided to end up with the multiple graph format. By using the
two graph format, I could show that there is not a reliable relationship between
the height and weight and the performance of a person but then show that their
handedness does affect it.

Additionally, I used local versions of d3/dimple since I worked mainly offline.
## Feedback
Bryan M: Make the graph labels for the axis bigger, it is kind of small for
me. Also I don't know what the value for the heights are. Are they in inches?

Gretchen B: Personally I'd like to see some visuals to show what graph I'm
looking at when I click the buttons. When I click the buttons, I got confused as
to which graph I was looking at. Could you color code the buttons somehow?

Alyson Q: To make it consistent, make 'avg' on the y axis capitalized like
everything else. Also, just stylistically, do you think you could order the
second chart like "L, B, R" to match the hands?

## Resources

#### For documentation on V5    
https://github.com/d3/d3/blob/master/CHANGES.md


#### How to work with strings into integers
https://stackoverflow.com/questions/17601105/how-do-i-convert-strings-from-csv-in-d3-js-and-be-able-to-use-them-as-a-dataset  

#### If Else statements for JS
https://www.w3schools.com/js/js_if_else.asp  


#### Aggregating data in DimpleJS
https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.aggregateMethod  

#### Recovering a dimple chart
https://stackoverflow.com/questions/27146622/remove-or-clear-previously-drawn-dimple-chart  

#### Disabling a button using D3
https://stackoverflow.com/questions/38525633/disable-a-button-using-d3-jquery-until-the-action-is-complete  

#### Styling Buttons
https://www.w3schools.com/css/css3_buttons.asp  
