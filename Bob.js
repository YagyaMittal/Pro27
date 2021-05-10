class Bob {
  constructor(x, y, diameter) {
    var options = {
          isStatic: false,
          restitution: 1.2,
          friction: 0.4,
          density: 1.5
    }
  this.body = Bodies.circle(x, y, diameter/2, options);
  this.diameter = diameter;
    
  World.add(world, this.body);
  }
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      ellipse(0, 0, this.diameter);
      pop();
  }
};