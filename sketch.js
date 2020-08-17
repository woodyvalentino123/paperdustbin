const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground,ball;


function setup() {
  createCanvas(1200, 700);
  //Create the Bodies Here.
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  box1 = new Box(1000,589,600,400);
  box2 = new Box1(899,639,20,100);
  box3 = new Box1(1090,639,20,100);
  ball = new Ball(200,675,70,100);
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  ground.display();
  box1.display();
  //box2.display();
  //box3.display();
 
  ball.display();
  Engine.update(engine);
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:25,y:-25})
  }
}