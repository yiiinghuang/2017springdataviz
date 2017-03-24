// ***** Global variables ***** //
var refugeeTable;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;
var topRefugeeCountries = new p5.Table;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']


// ***** Preload function ***** //
function preload(){
  refugeeTable = loadTable('../data/RefugeesUNHCR1.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(12);
  console.log('Setup complete...');
  print(refugeeTable.getRowCount() + ' rows loaded...');
  print(refugeeTable.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
    maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
  creatNewTable();
}

function creatNewTable(){
  //write a loop to add column title
  for (var i = 0; i < headers. length; i++){
    topRefugeeCountries.addColumn(headers[i]);
  }
    //topRefugeeCountries.addColumn('Country');
    //topRefugeeCountries.addColumn('Total');
for(var i = 0; i < refugeeTable.getRowCount(); i++){
   var totalRefugees = refugeeTable.getNum(i,'Total');
   if (totalRefugees >= 100000){
      var newRow = topRefugeeCountries.addRow();
      for (var j = 0; j < headers.length; j++){
      newRow.setString(headers[j],refugeeTable.getString(i, headers[j]));
      }
    }
  }
  print('New top refugee table created...');

}
function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < topRefugeeCountries.getRowCount(); i++) {
        var total = topRefugeeCountries.getNum(i, category);
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 5, 2 + 14*i, length, 12);
        text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < topRefugeeCountries.getRowCount(); i++) {
        text(topRefugeeCountries.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
    }
}

function draw(){
    background(255);
    drawCountries('Asylum-seekers');
}