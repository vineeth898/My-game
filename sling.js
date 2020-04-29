class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      this.sling=Constraint.create(options);
      this.pointB=pointB;
      World.add(world,this.sling);
    }
  
    display(){
        stroke("white");
       line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
  }
  