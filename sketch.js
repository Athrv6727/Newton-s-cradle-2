
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);


	engine = Engine.create();
	world = engine.world;

   let canvasmouse = mouse.create(canvas.elt);
   canvasmouse.pixelRatio=pixelDensity();
   let options={
	   mouse:canvasmouse
   };
   msConstraint=MouseConstraint.create(engine,options);
   world.add(world,msConstraint)

	//Create the Bodies Here.
    bobObj1 = new Pendulum(50,140,70);
	bobObj2 = new Pendulum(70,140,70);
	bobObj3 = new Pendulum(90,140,70);
	bobObj4 = new Pendulum(110,140,70);
	bobObj5 = new Pendulum(130,140,70);
	rope1=new Sling(bobObj1,50)
	rope2=new Rope(bobObj2,50)
	rope3=new Rope(bobObj3,50)
	rope4=new Rope(bobObj4,50)
	rope5=new Rope(bobObj5,50)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 platform.display()
 bobObj1.display()
 bobObj2.display()
 bobObj3.display()
 bobObj4.display()
 bobObj5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}
function mouseDragged(){
	Matter.Body.setPosition(bobObj1.body,{x:mouseX,y:mouseY})
}


