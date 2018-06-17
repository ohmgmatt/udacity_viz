
// Set the height and width
var w = 500, h = 500;
var padding = 10;

// Edit the dataset

// Create the draw function
function draw(dataset) {

  // Clean the dataset
  dataset.forEach(function(d) { d.HR = +d.HR;});
  dataset.forEach(function(d) { d.height = +d.height;});
  dataset.forEach(function(d) { d.weight = +d.weight;});

  // Create the scales
  var xScale = d3.scaleLinear()
                .domain([d3.min(dataset, function(d){ return d.height;}),
                          d3.max(dataset, function(d){ return d.height;})
                        ])
                .range([padding, w - padding]);
  var yScale = d3.scaleLinear()
                .domain([d3.min(dataset, function(d){ return d.weight;}),
                          d3.max(dataset, function(d){ return d.weight;})
                        ])
                .range([h-padding, padding]);

  var rScale = d3.scaleLinear()
                .domain([d3.min(dataset, function(d){ return d.HR;}),
                          d3.max(dataset, function(d){ return d.HR;})
                        ])
                .range([1,10]);

  // Create the SVG
  var canvas = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

  //Create the points
  var point = canvas.selectAll("circle")
            .data(dataset)
            .enter()
              .append("circle")
              .attr("cx", function(d) { return xScale(d.height); })
              .attr("cy", function(d) { return yScale(d.weight); })
              .attr("r", function(d) { return rScale(d.HR); });

}
