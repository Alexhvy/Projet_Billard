function setup() {
  // put setup code here
  createCanvas(1600,800)
  background(0);
  noLoop();
  billiard = new Table()
}


function draw() {
  // put drawing code here
  billiard.show();
}
