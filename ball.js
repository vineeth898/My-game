class ball{
    constructor(x,y){
    var op={
            'restitution':0.5,
            //'isStatic':false
        }
    this.ball=Bodies.circle(x,y,50,op);
    this.img1=loadImage("sprites/happy.png");
    //this.img2=loadImage("sprites/sad.png");
    World.add(world,this.ball);
    }
    display(){ 
        var angle = this.ball.angle;
        push();
        translate(this.ball.position.x, this.ball.position.y);
        rotate(angle);
        imageMode(CENTER);
       image(this.img1,0,0,100,100);
        pop();
    }
}