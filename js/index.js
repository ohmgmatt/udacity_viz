
// Set the height and width
var w = 500, h = 500;



// Create the draw function
function draw(dataset) {

  var canvas = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

  var bar = canvas.selectAll("rect")
              .data(dataset)
              .enter()
                .append("rect")
                .attr("width", function(d) { return +d.HR; })
                .attr("height", 1)
                .attr("y", function(d, i) { return i; });


}
