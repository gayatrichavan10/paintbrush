function setup() {
  createCanvas(700, 480);
  
  background(220,150,0);
  
  strokeWeight(10);
  
  stroke("purple");
  frameRate("50");
}

function draw() {
  
  let posY = mouseX;
  let posX = mouseY;
  
  point(posY,posX)
}