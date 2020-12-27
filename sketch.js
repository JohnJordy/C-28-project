var ground
var log
var leaves,leaves2
var mango1,mango2,mango3 
var ring
var count
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
function setup() {
	createCanvas(800,350);

	engine = Engine.create();
	world = engine.world;

ground =createSprite(400,350,40000,50)

ground.shapeColor='black'


log = createSprite(675,225,50,200)

log.shapeColor='brown'


leaves= createSprite(675,175,250,100)

leaves.shapeColor='green'

leaves2= createSprite(675,100,150,100)

leaves2.shapeColor='green'


mango1= createSprite(610,160,50,50)

mango1.shapeColor='yellow'

mango2= createSprite(690,100,50,50)

mango2.shapeColor='yellow'

mango3= createSprite(750,180,50,50)

mango3.shapeColor='yellow'

count = 0

ring = createSprite(250,250,30,30)

ring.shapeColor ='blue'

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}

ring.x=mouseX
ring.y=mouseY

text("The Blue thing is your aim If it touches the mango the mango will be plucked",100,175)

if(ring.isTouching(mango1)){
mango1.x = 9000
count=count+1
}

if(ring.isTouching(mango2)){
  mango2.x=9000
  count=count+1
  }

  if(ring.isTouching(mango3)){
    mango3.x = 9000
    count=count+1
    }
    
     if(frameCount % 60 === 0){
      mango1.x = 610
     }

      if(frameCount % 100 === 0){
      mango2.x = 690
      }
       if(frameCount % 40 === 0){
      mango3.x = 750
      }
    text("Number of mangoes plucked:"+count,50,50)
drawSprites()
}
