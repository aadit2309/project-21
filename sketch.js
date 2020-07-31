var helicopterimg, helicopter, packages,packageimg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterimg=loadImage("helicopter.png")
	packageimg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	background(80,80,80);
	rectMode(CENTER);
	

	packages=createSprite(width/2, 80, 10,10);
	packages.addImage(packageimg)
	packages.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterimg)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown = DOWN_ARROW) {
    packageBody.isStataic=false;
	packageBody.setScale=0.5;
	package.x=pakages.position.x;
	package.y=packages.position.y;
  }
}



