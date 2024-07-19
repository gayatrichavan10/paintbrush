function setup() {
  createCanvas(700, 480);
  
  background(220,150,0);
  
  strokeWeight(10);
  
  stroke("blue");
  frameRate("50");
  noStroke();
}

function draw() {
  
  let posY = mouseX;
  let posX = mouseY;
  
  rect(posY,posX,56,60,98)
}
