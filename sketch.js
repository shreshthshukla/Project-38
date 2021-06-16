var PLAY = 1;
var END = 0;
var gameState = PLAY;

var car, carI;
var road, roadI;

var tank, tankI, tankGroup;
var score=0;

var gameOver, restart;
var gameOverImg, restartImg;



function preload(){  

  // tankI = loadImage("Blue tank.png");
  
  carI = loadImage("Car1.png");
  
  roadI = loadImage("road.png");
  
  gameOverImg = loadImage("GameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(1000, 700);
  
  road = createSprite(width/2,-1200);
  road.addImage(roadI);

  car = createSprite(500,450);
  car.addImage(carI);
  car.scale=0.2
  car.velocityY= -6;
  
  
  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);
  
  gameOver.visible = false;
  restart.visible = false;
  
 
  tankGroup = new Group();
  score = 0;

}

function draw() {

  background("red");
  
 
  
  if(gameState===1){
  camera.position.x = 500;
  camera.position.y = car.y;
 }
 if(car.y<-3000){
  gameState=0;
}
  // console.log(car.y);

   
  
  if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    car.velocityY = 0;
    
  } 
  
  drawSprites();

} 

