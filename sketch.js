var playrocket
var background
var star
var rocket,space,star1
var gamestate="play"
var restart,restartima
var moon,moon1

function preload(){
rocket=loadImage("Images/rocket1_1.png")
space=loadImage("Images/space.png")
star1=loadImage("Images/star.png")
restartima=loadImage("Images/restart.png")
moon1=loadImage("Images/moon.png")
}
function setup(){
  canvas=createCanvas(1350,625)
  //background=createSprite(width/2,height/2,20,20)
 // background.scale=1
 //background.addImage(space)
  playrocket=createSprite(50,200,15,15)
  playrocket.addImage(rocket)
  playrocket.scale=0.3
  stargroup=createGroup()
  moongroup=createGroup()
  restart=createSprite(width/2,height/2,10,10)
  restart.addImage(restartima)
  restart.scale=0.1
 
 

  
 
}
function smoon(){
  console.log(frameCount)
  if (frameCount==1000 ) {
    moon=createSprite(width,height/2,10,10)
    moon.addImage(moon1)
    moon.scale=0.3

    moon.velocityX=-4
    moongroup.add(moon)
   
  }
  
}
function draw() {
  background("black")
  //if(frameCount==100){
    console.log(frameCount)
    
    
 // }
 
  image(space,0,0,width,height)
  if (gamestate=="play") {
    restart.visible=false
    playrocket.y=World.mouseY
    infinatestar() 
   smoon()
   if(playrocket.isTouching(moongroup)){
    moon.destroy()
    gamestate="win"
    }

     
      
  if(playrocket.isTouching(stargroup)){
    gamestate="end"
    }
    
      }
  

 
  if (mousePressedOver(restart)) {
    gamestate="play"
    frameCount=0
  }
if (gamestate=="end") {
  background("red")
  fill("white")
  textSize(40)
      text("GAMEOVER:(",width/2-100,height/3)
      restart.visible=true
      playrocket.y=200
      stargroup.setVelocityXEach(0)
      stargroup.destroyEach()
      moongroup.velocityXEach=0
      moongroup.visible=false
}
if (gamestate=="win") {
background("green")
  fill("white")
  textSize(40)
      text("Smooth Landing:)",width/2-100,height/3)
      restart.visible=true
      playrocket.y=200
      stargroup.setVelocityXEach(0)
      stargroup.destroyEach()
}
drawSprites()
}

function infinatestar(){
if (World.frameCount%40==0)
{
  star=createSprite(1350,random(10,650),20,20)
  star.velocityX=-6
  star.addImage(star1)
  star.scale=random(0.1,0.13
    )
  stargroup.add(star)
}

}
