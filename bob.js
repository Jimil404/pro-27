class bob {
    constructor(x,y) {

      var options={
        
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
      this.body = Bodies.circle(x,y,20,options);
      // this.image = loadImage("paper.png");
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x,pos.y,this.radius,this.radius);

    }
  };