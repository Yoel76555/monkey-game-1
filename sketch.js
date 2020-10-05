var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
//var score
var survivalTime=0;
//var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 //monkey_collided=loadImage("sprite_5.png")
}



function setup() {
  createCanvas(400,400);
  
  //stroke("white");
  //textSize(20);
  //fill("white");
  
  //stroke("black");
  //textSize(20); 
  //fill("black");
  //survivalTime=Math.ceil(frameCount/frameRate());// it will    e execute on once since it was in setup
  //text("Survival Time: "+ survivalTime,100,50);// it will    e execute on once since it was in setup
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
  
}


function draw() {
  background(220);
  //console.log(monkey.y);
  monkey.collide(ground);

  
 
  
if(gameState === PLAY){
   spawnBanana();
  spawnObstacle();
    
  
    ground.velocityX = -(4 + 3* survivalTime/100)
    //scoring
    survivalTime = survivalTime + 1;
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ survivalTime,100,50);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 230 ) { //updated this to jump high
    monkey.velocityY = -10;
  }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   
    
    if(obstacleGroup.isTouching(monkey)){
        monkey.velocityX=0;
      gameState=END;
     
      //survivalTime=
    }
  }
   else if (gameState === END) {
      text("gameover",150,100);
        reset() ;    

   
   }
  
   
  
 
  drawSprites();
  
  
 
}
function reset() {
ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
  
}
function spawnBanana() {
  
  if (frameCount % 80 === 0){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(250,200));
    banana.scale=0.1;
     banana.addImage(bananaImage);
    banana.velocityX= -8;
    banana.lifetime= 100;
    bananaGroup.add(banana);
     }
  
  
  
  
  
  
}
 function spawnObstacle() {
   if (frameCount % 300 === 0){
     obstacle = createSprite(400,325,10,40);
     obstacle.scale=0.1;
     obstacle.addImage(obstacleImage);
     obstacle.lifetime=300;
     obstacleGroup.add(obstacle);
     obstacle.velocityX = -6
     obstacleGroup.add(obstacle);
     
     
     
   }
 }



