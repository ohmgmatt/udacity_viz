function draw(data) {

  //data.forEach(function(d) { d.HR = +d.HR;});
  //data.forEach(function(d) { d.avg = +d.avg;});
  //data.forEach(function(d) { d.height = +d.height;});
  //data.forEach(function(d) { d.weight = +d.weight;});

  plot1(data);
  plot2(data);

  //d3.select("body").append("p").text("THIS IS THE END");

}
function plot1(data) {
  var padding = 75;
  var w = 1400 - padding,
      h = 600 - padding;

  var svg1 = d3.select("body")
              .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
              .append("g")
                .attr("class", "chart");

  var myChart1 = new dimple.chart(svg1, data);
  myChart1.addCategoryAxis("x", "height");
  myChart1.addMeasureAxis("y", "HR");
  myChart1.addSeries(null, dimple.plot.bar)
    .aggregate = dimple.aggregateMethod.avg;
  myChart1.setBounds(padding,padding,w - padding,h - padding);
  myChart1.draw();

}
function plot2(data) {
  var padding = 75;
  var w = 1400 - padding,
      h = 600 - padding;

  var svg2 = d3.select("body")
            .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
            .append("g")
              .attr("class", "chart");

  var myChart2 = new dimple.chart(svg2,data);
  myChart2.addCategoryAxis("x", "handedness");
  myChart2.addMeasureAxis("y", "avg");
  myChart2.addSeries(null, dimple.plot.bar)
    .aggregate = dimple.aggregateMethod.avg;
  myChart2.setBounds(padding,padding,w - padding,h - padding);
  myChart2.draw();
}
