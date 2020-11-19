class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.04,
            friction:0.5,
            density:2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
    }
    display(){
        
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);    
      
      fill("yellow");
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.radius, this.radius);
    
      pop();
    }
  }