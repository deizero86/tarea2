let a = 50;
let b = 150;

function setup() {
  createCanvas(200, 200);
  }

function draw() {
  a = a+.5;
  b = b-.5;
  background(220);
  fill (255, 255, 255)
  square(0, 0, 200);
  fill (192, 192, 192);
  circle(a, a, 40);
  circle(b, a, 40);
  circle(a, b, 40);
  circle(b, b, 40);
  if(a == b){
    noLoop() }
}
