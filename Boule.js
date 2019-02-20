function Boule (x,y,acc){
  this.pos = createVector(x,y);
  this.acc = createVector(acc,0);
  this.vel = createVector(0,0);
  this.rayon = 15;

  this.update = function (){


    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(0.96);

  }


  this.show = function (){

    circle(this.pos.x,this.pos.y,this.rayon);

  }

  this.gestionCollision = function (other)
  {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if(d < this.rayon + other.rayon){
        return true;
      }
      else {
        return false;
      }
  }

}
