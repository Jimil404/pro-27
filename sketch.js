const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bobObject1 = new bob(500,380);
	 bobObject2 = new bob(460,380);
	 bobObject3 = new bob(420,380);
	 bobObject4 = new bob(380,380);
	 bobObject5 = new bob(340,380);
	 	roof1 = new Roof(400,250,400,20);
	  	rope1 = new Rope(bobObject1.body,roof1.body);
	   	rope2 = new Rope(bobObject2.body,roof1.body);
		rope3 = new Rope(bobObject3.body,roof1.body); 
		rope4 = new Rope(bobObject4.body,roof1.body);
	  	rope5 = new Rope(bobObject5.body,roof1.body)

	Engine.run(engine);
  
}


function draw() {
	background(180);
  rectMode(CENTER);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed()
 { if 
	(keyCode === UP_ARROW) 
	{ Matter.Body.applyForce
	(bobObject4.body,bobObject4.body.position,{x:-50,y:-45});
 } }

