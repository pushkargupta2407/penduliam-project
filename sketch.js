const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine,world;
var string1,ball,land;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var balloptions={
    'restitution':1.0,
    'density':1.0
  }

  ball = Bodies.circle(200,300,50,balloptions);
  World.add(world,ball);
  land = new Ground(200,50,100,10);
  string1 = new Rope(ball,land);
  //console.log(ball.body);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
 
  land.display();
  string1.display();
  //drawSprites();
}