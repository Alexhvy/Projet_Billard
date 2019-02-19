function Boule (x,y){
  this.pos = createVector(x,y);
  this.acc = createVector(random(0,5),0);
  this.vel = createVector(random(5,40),0);
  this.rayon = 15;

  this.update = function (){

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0.09);


  }


  this.show = function (){

    circle(this.pos.x,this.pos.y,this.rayon);

  }
}
