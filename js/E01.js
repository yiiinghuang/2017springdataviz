// ***** Setup function ***** //
function setup(){
  createCanvas(500,500);
  colorMode(HSB,width);
  }

function drawSquare(){
  for (var x = 0; x <= width; x=x+20) {
  for (var y = 0; y <= height; y=y+20) {
  var a=color(x,y,width);
  fill(a);
  rect(x,y,20,20);
    }
  }
}

// ***** Draw function ***** //
function draw(){
   background(255);  
   noStroke();
   drawSquare();  
}