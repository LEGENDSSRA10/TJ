var tom, tomRunning, tomImage, tomSitting, tomCatch;
var jerry, jerryRunning, jerryImage, jerryStart, jerryCatch;
var garden, gardenImage;

function preload() 
{
  tomRunning = loadAnimation("images/tomTwo.png", "images/tomThree.png");
  tomSitting = loadAnimation("images/tomOne.png");
  tomCatch = loadAnimation("images/tomFour.png");
  jerryRunning = loadAnimation("images/jerryOne.png", "images/jerryThree.png");
  jerryStart = loadAnimation("images/jerryTwo.png");
  jerryCatch = loadAnimation("images/jerryFour.png");
  gardenImage = loadImage("images/garden.png");
}

function setup()
{
  createCanvas(1000,800);
  
  garden = createSprite(0, 300, 600, 600);
  garden.addImage(gardenImage);
  garden.scale = 1.5;
  //garden.velocityX = -4;

  tom = createSprite(600, 550, 100, 100);
  tom.addAnimation("tom", tomSitting);
  tom.scale = 0.1;
  //tom.x = 50;

  jerry = createSprite(200, 550, 100, 100);
  jerry.addAnimation("jerry", jerryStart);
  jerry.scale = 0.1;
  //jerry.x = 50;
}

function draw() 
{
  background("green");
  
  //if(garden.x < 0)
  //{
      //garden.x = garden.width/2;
  //}

  //if(keyDown("space"))
  //{
     // tom.velocityY = -10;
  //}

  //tom.velocityY = tom.velocityY + 0.5;
  //tom.velocityY = garden.velocityY;

  //if(tom.isTouching(jerry))
   //{
    //jungle.velocityY = 0;
    //tom.velocityY = 0;
    //jerry.velocityY = 0;
   //}
  //garden.velocityY

  if(keyDown(LEFT_ARROW))
  {
    tom.velocityX = -3;
    tom.addAnimation("Running", tomRunning);
    tom.changeAnimation("Running");
    jerry.addAnimation("Running", jerryRunning);
    jerry.changeAnimation("Running");
    //loadAnimation(tomRunning);
    //loadAnimation(jerryRunning);
  }

  if(tom.x - jerry.x < (tom.width - jerry.width)/2)
{
  tom.velocityX = 0;
  tom.addAnimation("Catch", tomCatch);
  tom.changeAnimation("Catch");
  jerry.addAnimation("Catch", jerryCatch);
  jerry.changeAnimation("Catch");
}
  drawSprites();
}

//function keyPressed()
//{}
