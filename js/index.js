function draw(data) {

  plot1(data);
  plot2(data);

}


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
  myChart2.addMeasureAxis("y", "avg");
  myChart2.addSeries(null, dimple.plot.bar)
    .aggregate = dimple.aggregateMethod.count;
  myChart2.setBounds(padding,padding,w - padding,h - padding);
  myChart2.draw();
}
