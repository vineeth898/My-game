var engine, world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Ball;
function setup(){
    createCanvas(1450,875);
    engine = Engine.create();
    world = engine.world;
    block1=new block(1350,600,30,300);
    block2=new block(950,600,30,300);
    block3=new block(1150,735,400,30);
    platform=new block(200,825,400,100);
    block4=new block(1350,200,30,100);
    block5=new block(950,200,30,100);
    block6=new block(1150,235,400,30);
    Ball=new ball(200,100);
    Shoot= new sling(Ball.body,{x:300,y:750});
}

function draw(){
   Engine.update(engine);
   background(0);
   block1.display(131,163,119);
   block2.display(131,163,119);
   block3.display(131,163,119);
   platform.display(190,156,69);
   block4.display(131,163,119);
   block5.display(131,163,119);
   block6.display(131,163,119);
   Shoot.display();
   Ball.display();
}