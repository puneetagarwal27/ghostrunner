var ghost , ghostIMG;
var tower, towerIMG;
var door , doorIMG , doorgrp;
var climber , climberIMG , climbergrp;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"




function preload(){
  towerIMG = loadImage("tower.png");
  ghostIMG = loadImage("ghost-standing.png");
  doorIMG = loadImage("door.png")
  climberIMG = loadImage("climber.png")
  doorgrp = new Group();
   climbergrp = new Group();
  invisibleBlockGroup = new Group();

}


function setup(){
  createCanvas(600 , 600);
   
  tower = createSprite(300 , 300 , 300 , 300);
  tower.addImage(towerIMG);
  tower.velocityY = 3;
  
  ghost = createSprite(300 , 400 , 20 , 20);
  ghost.addImage(ghostIMG);
  ghost.scale = 0.4;
}

function draw(){
  background(0);
  if (gameState === "play") {

  
  
  if (tower.y>400){
    tower.y = 300;
  }
  
  spawndoors();
  
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY+0.3;
  
  if(keyDown("left")){
    ghost.x = ghost.x-3;
  }
  
  
  if(keyDown("right")){
    ghost.x = ghost.x+3;
  }
   if(climbergrp.isTouching(ghost)){
     ghost.velocityY = 0;
   }      
  
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
    gameState = "end";
  }
    spawndoors();
     
  
  
  drawSprites();
  }
if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}
function spawndoors(){
  if(frameCount % 120 === 0 ){
    door = createSprite(200 , -50 , 10 , 30);
    climber = createSprite(200 , 0 , 30 , 10);
      var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    climber.addImage(climberIMG);
    door.addImage(doorIMG);
    door.velocityY = 3;
    climber.velocityY = door.velocityY
    invisibleBlock.velocityY = 3;
    door.x = Math.round(random(100 , 400));
    climber.x = door.x;
     invisibleBlock.x = door.x;
    door.Lifetime = 200;
     climber.Lifetime = 200;
     invisibleBlock.lifetime = 800;
    doorgrp.add(door);
    climbergrp.add(climber)
    invisibleBlockGroup.add(invisibleBlock);
    ghost.depth = door.depth
    ghost.depth = ghost.depth+1
invisibleBlock.debug = false;
    
  }
  
  
  
  
  
  
  
  
}






