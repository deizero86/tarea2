function setup() {
  createCanvas(200, 200);
  }

function mouseReleased(){
loop();
}

function draw() {
  if (mouseIsPressed) {
    noLoop();
   }
  background(220);
  fill (192, 192, 192)
  square(0, 0, 200);
  a = random(0, 200);
  b = random(0, 200);
  
  fill (255, 255, 255);
  circle(a, b, 40);

}


