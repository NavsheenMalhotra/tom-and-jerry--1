
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tom;
var jerry;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

tom=new Tom(500, 630, 50, 50);
jerry=new Jerry(400, 640, 60, 60);
ground=new Ground(600,700,1200,20)


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  tom.display()
  jerry.display();
  ground.display();
  drawSprites();
 
}



