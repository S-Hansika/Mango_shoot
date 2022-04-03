class Circle {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
  
      this.r = 45;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
    push();
    imageMode(CENTER);
image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    }

    remove(){
        Matter.World.remove(world, this.body);
    }
  }