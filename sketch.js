
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,400,30);
	bob2 = new Bob(260,400,30);
	bob3 = new Bob(320,400,30);
	bob4 = new Bob(380,400,30);
	bob5 = new Bob(440,400,30);
	
	string1 = new StringThread(bob1.body,{x:200,y:300});
	string2 = new StringThread(bob2.body,{x:260,y:300});
	string3 = new StringThread(bob3.body,{x:320,y:300});
	string4 = new StringThread(bob4.body,{x:380,y:300});
	string5 = new StringThread(bob5.body,{x:440,y:300});

	roof = new SupportRoof(320,300,260,20);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
   string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display(); 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();;
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
	  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-240,y:240});
	}
	}

