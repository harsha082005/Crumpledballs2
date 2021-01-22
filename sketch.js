
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var bin,binImg;

function preload()
{
	binImg = loadImage("Images/dustbingreen.png"); 
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(840,295);
	bin.addImage(binImg);
	bin.scale=0.5;

	paper= new Paper(80,300,30);
	ground = new Ground(350,380,1700,10);
	dustbin1 = new Dustbin(900,345,10,60);
	dustbin2 = new Dustbin(840,370,112,10);
	dustbin3 = new Dustbin(780,345,10,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 keyPressed();
 
 drawSprites();

 
}


function keyPressed(){

	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

		
	}
}


