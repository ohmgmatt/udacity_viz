//Establishing Global Variables

var padding = 70;
  var w = 900 - padding,
      h = 500 - padding;

// This creates the larger draw function and is what is called by the
// main HTML code.
function draw(data) {
  plot1(data);
  plot2(data);
}

// Function to draw the first charts where we compare how height
// and weight affect performance.
function plot1(data) {

  var svg1 = d3.select("body").select("#chart1")
              .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
              .append("g")
                .attr("class", "chart")
                .attr("id","firstChart");

  var myChart1 = new dimple.chart(svg1, data);

  function chart1(data, category, measure, xtitle) {
    var xAxis = myChart1.addCategoryAxis("x",category);
      xAxis.addOrderRule(category);
      xAxis.fontSize = "12px";
      xAxis.title = xtitle;
    var yAxis = myChart1.addMeasureAxis("y", measure);
      yAxis.showGridlines = true;
      yAxis.tickFormat = ',.3f';
    myChart1.addSeries(null, dimple.plot.bar)
      .aggregate = dimple.aggregateMethod.avg;
    myChart1.setBounds(padding,padding, w - padding, h - padding);
    myChart1.draw(750);
  }

  var physical = ['Height - HR', 'Height - AVG', 'Weight - HR', 'Weight - AVG']

  d3.select("#set1").selectAll("button")
    .data(physical)
    .enter()
    .append("button")
      .text(function(d) { return d; })
      .attr("class","buttons1")
    .on("click",function(d) {
      if (d == 'Height - HR') {

            myChart1.svg.selectAll('*').remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "height", "HR", "Height (inches)");

          } else if (d == 'Height - AVG') {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "height", "avg", "Height (inches)");

          } else if (d == "Weight - HR") {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "weight", "HR", "Weight (lbs)");

          } else if (d == 'Weight - AVG') {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1,data);
            chart1(data, "weight", "avg", "Weight (lbs)");

          }
    });

  chart1(data, "height", "HR", "Height (inches)");
}

// Function to draw the second chart where we compare how handedness
// affect performance by seeing their average for both HR and batting avg.
function plot2(data) {

  var svg2 = d3.select("body").select("#chart2")
            .append("svg")
              .attr("width", w + padding)
              .attr("height", h + padding)
            .append("g")
              .attr("class", "chart");

  var myChart2 = new dimple.chart(svg2,data);

  function chart2(data, measure, aggr) {
    var xAxis = myChart2.addCategoryAxis("x", "handedness");
      xAxis.fontSize = "12px";
      xAxis.title = "Handedness";
    var yAxis = myChart2.addMeasureAxis("y", measure);
      yAxis.tickFormat = ',.3f';
    myChart2.addSeries(null, dimple.plot.bar)
      .aggregate = aggr;
    myChart2.setBounds(padding,padding,w - padding,h - padding);
    myChart2.draw(750);
  }

  var handy = ["Amount of Players", "Average of Home Runs", "Average of Batting Averages"]

  d3.select("#set2").selectAll("button")
    .data(handy)
    .enter()
    .append("button")
      .text(function(d) { return d; })
      .attr("class","buttons2")
    .on("click", function(d) {
      if (d == "Average of Home Runs") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "HR", dimple.aggregateMethod.avg);

      } else if (d == "Average of Batting Averages") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "avg", dimple.aggregateMethod.avg);

      } else if ( d == "Amount of Players") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "HR", dimple.aggregateMethod.count);

      }
    });
  chart2(data, "HR", dimple.aggregateMethod.count);

}
