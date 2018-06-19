function draw(data) {

  data.forEach(function(d) { d.HR = +d.HR;});
  data.forEach(function(d) { d.avg = +d.avg;});
  data.forEach(function(d) { d.height = +d.height;});
  data.forEach(function(d) { d.weight = +d.weight;});

  var padding = 75;
  var w = 1000 - padding,
      h = 400 - padding;

  var svg1 = d3.select("body")
              .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
              .append("g")
                .attr("class", "chart");

  var myChart1 = new dimple.chart(svg1, data);
  myChart1.addCategoryAxis("x", "handedness");
  myChart1.addMeasureAxis("y", "HR");
  myChart1.addSeries(null, dimple.plot.bar)
  myChart1.draw();

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
  myChart2.draw();

}
