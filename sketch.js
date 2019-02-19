boules = [];

function setup() {
  // put setup code here
  createCanvas(1600,800);
  fill(255);
  for (let i=0;i<3;i++){
    boules.push(new Boule(random(300),random(300)));
  }
  frameRate(10);

}


function draw() {
  // put drawing code here
background(51);
for (let i=0;i<boules.length;i++){
    boules[i].update();
    boules[i].show();
}


}
