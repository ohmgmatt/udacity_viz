// This creates the larger draw function and is what is called by the
// main HTML code.
function draw(data) {

  plot1(data);
  plot2(data);
}

// Function to draw the first charts where we compare how height
// and weight affect performance.
function plot1(data) {

  var padding = 50;
  var w = 750 - padding,
      h = 450 - padding;

  var svg1 = d3.select("body").select("#chart1")
              .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
              .append("g")
                .attr("class", "chart");

  var myChart1 = new dimple.chart(svg1, data);
  myChart1.addCategoryAxis("x", "height");
  myChart1.addMeasureAxis("y", "avg");
  myChart1.addSeries(null, dimple.plot.bar)
    .aggregate = dimple.aggregateMethod.avg;
  myChart1.setBounds(padding,padding,w - padding,h - padding);
  myChart1.draw();

}

// Function to draw the second chart where we compare how handedness
// affect performance by seeing their average for both HR and batting avg.
function plot2(data) {
  var padding = 50;
  var w = 750 - padding,
      h = 450 - padding;

  var svg2 = d3.select("body").select("#chart2")
            .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
            .append("g")
              .attr("class", "chart");

  var myChart2 = new dimple.chart(svg2,data);
  myChart2.addCategoryAxis("x", "handedness");
  myChart2.addMeasureAxis("y", "HR");
  myChart2.addSeries(null, dimple.plot.bar)
    .aggregate = dimple.aggregateMethod.avg;
  myChart2.setBounds(padding,padding,w - padding,h - padding);
  myChart2.draw();

}
