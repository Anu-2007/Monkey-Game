
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200); 

  monkey=createSprite(80,315,20,20);
  monkey=addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  
  
  
  
}


function draw() {
  background("grey");
 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  concole.log(ground.x);
  
  monkey.collide(ground);
  
  
  bannana();
  obstacle();
  
  drawSprites();
  
  
}

  function spawnBanana(){
    
  

  if(frameCount % 80===0) {
     var banana = createSprite(600,120,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale=0.5;
     banana.velocity= -3;
     banana.lifetime=200;
     bananaGroup.add(banana);
  }
  
  }

  if(frameCount % 300===0) {
     var obstacle = createSprite(600,120,40,10);
      obstacle.y = Math.round(random(120,200));
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.5;
      obstacle.velocity= -3;
      obstacle.lifetime=200;
      obstacleGroup.add(obstacle);
     
      stroke("white");
      textSize(20);
      fill("white");
      text("Score: " + score, 500, 50 );
    
       stroke("black");
       textSize(20);
       fill("black");
       survivalTime=Math.ceil(farmeCount/frameRate());
       text("survival Time: " + survivalTime, 100,50);
  }


