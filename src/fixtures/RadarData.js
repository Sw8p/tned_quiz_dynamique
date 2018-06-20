
/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = {top: 80, right: 100, bottom: 80, left: 100},
	width = Math.min(550, window.innerWidth - 10) - margin.left - margin.right,
	height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////

export var data = [
		  [//3C
			{axis:"Connaissances",value:0.85},
			{axis:"Compréhension",value:0.56},
			{axis:"Comportement",value:0.20},
			{axis:"Connaissances2",value:0.52},
			{axis:"Compréhension2",value:0.75},
			{axis:"Comportement2",value:0.45}
		  ]
		];
//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
	.range(["#EDC951"]);

export var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 1,
  levels: 5,
  roundStrokes: true,
  color: color
};
