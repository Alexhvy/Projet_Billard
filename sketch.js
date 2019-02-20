boules = [];

function setup() {
  // put setup code here
  createCanvas(1600,800);
  fill(255);
  boules.push(new Boule(50,300,15));
  boules.push(new Boule(400,300,-45));
  boules.push(new Boule(427,285,-5));
  boules.push(new Boule(427,315,-3));

  frameRate(10);

}


function draw() {
  // put drawing code here
background(51);
for (let ball of boules){
    ball.update();
    ball.show();
    let contact = false;
    for(let otherBall of boules){
      if(ball != otherBall && ball.gestionCollision(otherBall)){
          contact = true;
      }
    }
    if (contact){
      ball.vel.mult(-1);
    }
  }
}
