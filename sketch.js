
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bin1, bin2, bin3
var papier
var paperImage
var basket

function preload()
{
	basket = loadImage("garbage.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(400, 700, 800, 30)
bin1 = new Waste(725, 685, 100, 10)
bin2 = new Waste2(775, 630, 10, 115)
bin3 = new Waste2(675, 630, 10, 115)
papier = new Paper(100, 680, 20, 20)
paperImage = createSprite(725, 660,10,10)
  paperImage.addImage(basket)
  paperImage.scale = 0.4;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 216, 255);
  
  drawSprites();
 ground.display();
 bin1.display();
 bin2.display();
 bin3.display();
 papier.display();
 keyPressed()

}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(papier.body,papier.body.position,{x:10.2,y:10.2})
	}
}

