function draw(data) {

  data.forEach(function(d) { d.HR = +d.HR;});
  data.forEach(function(d) { d.avg = +d.avg;});
  data.forEach(function(d) { d.height = +d.height;});
  data.forEach(function(d) { d.weight = +d.weight;});

  var padding = 75;
  var w = 1000 - padding,
      h = 400 - padding;

  var svg = d3.select("body")
              .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
              .append("g")
                .attr("class", "chart");

  var myChart = new dimple.chart(svg, data);
  myChart.addCategoryAxis("x", "handedness");
  myChart.addMeasureAxis("y", "HR");
  myChart.addSeries(null, dimple.plot.bar)
  myChart.draw();




}
