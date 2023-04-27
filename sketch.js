var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 ghost = createSprite (200,200,40,40)
 ghost.addImage (ghostImg)
 ghost.scale= 0.4
}

function draw() {
  background(200);
 if (gameState=="play"){
  if(keyDown("space")){
  ghost.velocityY = -10

 }
 ghost.velocityY=ghost.velocityY=+8

  if(tower.y > 400){
      tower.y = 300
      
    }
    drawSprites()
  }
}
