const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pelota,suelo,muro1,muro2;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var pelota_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	pelota = Bodies.circle(260,100,radius/2,pelota_options);
	World.add(world,pelota);

	suelo =new Ground(width/2,670,width,20);
	muro1 = new Ground(1100,600,20,120);
	muro2 = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(pelota.position.x,pelota.position.y,radius,radius);

  suelo.display();
  muro1.display();  
  muro2.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(pelota,pelota.position,{x:85,y:-85});
    
  	}
}