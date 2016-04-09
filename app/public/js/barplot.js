
/* setup canvas  */
var width = 400;
var height = 300;
var svg = d3.select("#canvas")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

$.getJSON( "public/json/Kaohsiung_tax.json", function( data ) {
  var years = [];
  var money = [];

  /* get data from server */

  $.each( data, function( key, val ) {
    years.push(parseInt(val['年度']));
    money.push(parseFloat(val['稅收合計(億元)']));
  });

  /* setup scale */
  var min = 250;
  var max = 400;

  var linear = d3.scale.linear()
        .domain([min,max])
        .range([0,400]);

  var axis = d3.svg.axis()
        .scale(linear)
        .orient("bottom")
        .ticks(15);

  /* add rectangles */
  var rectHeight = 25;

  svg.selectAll("rect")
     .data(money)
     .enter()
     .append("rect")
     .attr("x",20)
     .attr("y",function(d,i){
      return i * rectHeight;
     })
     .attr("width", function(d){
      return linear(d);
     })
     .attr("height", rectHeight-2)
     .attr("fill", "steelblue");

  /* add scale */
  svg.append("g")
     .attr("class","axis")
     .attr("transform","translate(20,250)")
     .call(axis);
});
