

// ***** Global variables ***** //
var refugeeTable;
var maxLength = 750;
var maxValue = 0;

function preload(){
	refugeeTable = loadTable('../data/RefugeesUNHCR1.csv', 'header');

}
// ***** Setup function ***** //
function setup(){
  createCanvas(1000, 4500);
  textAlign(RIGHT, TOP);
  console.log('refugeeTable')
  print(refugeeTable.getColumnCount());
  print(refugeeTable.getRowCount());
  //find the maximum variable in Total
  for (var i = 0; i < refugeeTable.getRowCount(); i++){
  	maxValue = max(maxValue, refugeeTable.getNum(i, 'Total'));
  }
  print(maxValue)
}

// ***** Draw function ***** //
function draw(){
	background(255);
	for(var i = 0; i < refugeeTable.getRowCount(); i++){
		var rectLength = map(refugeeTable.getNum(i, 'Total'), 0, maxValue, 0, maxLength); 
		rect(100, 50 + 20*i, rectLength,15);
	}
}
