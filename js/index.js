//Establishing Global Variables

var padding = 70;
  var w = 900 - padding,
      h = 500 - padding;

// This creates the larger draw function and is what is called by the
// main HTML code.
function draw(data) {
  plot1(data);
  plot2(data);

  d3.selectAll(".dimple-title").style("font-size","12px");
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
                .attr("id","firstChart")


  var myChart1 = new dimple.chart(svg1, data);


  function chart1(data, category, measure, xtitle, ytitle) {
    var xAxis = myChart1.addCategoryAxis("x",category);
      xAxis.addOrderRule(category);
      xAxis.title = xtitle;
    var yAxis = myChart1.addMeasureAxis("y", measure);
      yAxis.showGridlines = true;
      yAxis.tickFormat = ',.3f';
      yAxis.title = ytitle;
    myChart1.addSeries(null, dimple.plot.bar)
      .aggregate = dimple.aggregateMethod.avg;
    myChart1.setBounds(padding,padding, w - padding, h - padding);
    myChart1.draw(750);

    svg1.append("text")
      .attr("x", myChart1._xPixels() + myChart1._widthPixels() / 2)
      .attr("y", myChart1._yPixels() - 20)
      .attr("class", "chart-titles")
      .attr("id", "chart-title-1")
      .text("Players Average Home Runs by Height");
  }


  var physical = ['Height - HR', 'Height - AVG', 'Weight - HR', 'Weight - AVG']

  d3.select("#set1").selectAll("button")
    .data(physical)
    .enter()
    .append("button")
      .text(function(d) { return d; })
      .attr("class", function (d, i) { return "buttons1 btn1_" + i;})
    .on("click",function(d) {

      d3.selectAll(".buttons1").attr("disabled",null);
      d3.select(this).attr("disabled",true);

      if (d == 'Height - HR') {

            myChart1.svg.selectAll('*').remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "height", "HR", "Height (inches)", "Average of Home Runs");
            d3.select("#chart-title-1")
              .text("Players Average Home Runs by Height");
          } else if (d == 'Height - AVG') {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "height", "avg", "Height (inches)", "Average of Batting Average");
            d3.select("#chart-title-1")
              .text("Players Average of Batting Average by Height")

          } else if (d == "Weight - HR") {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1, data);
            chart1(data, "weight", "HR", "Weight (lbs)", "Average of Home Runs");
            d3.select("#chart-title-1")
              .text("Players Average Home Runs by Weight")

          } else if (d == 'Weight - AVG') {

            myChart1.svg.selectAll("*").remove();
            myChart1 = new dimple.chart(svg1,data);
            chart1(data, "weight", "avg", "Weight (lbs)", "Average of Batting Average");
            d3.select("#chart-title-1")
              .text("Players Average of Batting Average by Weight")

          }

        d3.selectAll(".dimple-title").style("font-size","12px");
    });

  chart1(data, "height", "HR", "Height (inches)", "Average of Home Runs");
  d3.select(".btn1_0").attr("disabled",true);
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
      xAxis.addOrderRule(["L","B","R"]);
      xAxis.title = "Handedness";
    var yAxis = myChart2.addMeasureAxis("y", measure);
      yAxis.tickFormat = ',.3f';
    myChart2.addSeries(null, dimple.plot.bar)
      .aggregate = aggr;
    myChart2.setBounds(padding,padding,w - padding,h - padding);
    myChart2.draw(750);

    svg2.append("text")
      .attr("x", myChart2._xPixels() + myChart2._widthPixels() / 2)
      .attr("y", myChart2._yPixels() - 20)
      .attr("class", "chart-titles")
      .attr("id", "chart-title-2")
      .text("Number of Baseball Players by Handedness");

  }

  var handy = ["Amount of Players", "Average of Home Runs", "Average of Batting Averages"]

  d3.select("#set2").selectAll("button")
    .data(handy)
    .enter()
    .append("button")
      .text(function(d) { return d; })
      .attr("class", function(d, i) { return "buttons2 btn2_" + i;})
    .on("click", function(d) {

      d3.selectAll(".buttons2").attr("disabled",null);
      d3.select(this).attr("disabled",true);

      if (d == "Average of Home Runs") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "HR", dimple.aggregateMethod.avg);
        d3.select("#chart-title-2")
          .text("Average of Baseball Players' Home Runs by Handedness");

      } else if (d == "Average of Batting Averages") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "avg", dimple.aggregateMethod.avg);
        d3.select("#chart-title-2")
          .text("Average of Baseball Players' Batting Average by Handedness");

      } else if ( d == "Amount of Players") {

        myChart2.svg.selectAll("*").remove();
        myChart2 = new dimple.chart(svg2, data);
        chart2(data, "HR", dimple.aggregateMethod.count);

      }
      d3.selectAll(".dimple-title").style("font-size","12px");
    });
  chart2(data, "HR", dimple.aggregateMethod.count);
  d3.select(".btn2_0").attr("disabled",true);

}
