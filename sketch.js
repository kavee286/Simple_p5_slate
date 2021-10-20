

var a;

function setup() {
  createCanvas(600, 600);

  a = createSprite(200,200,30,10);
  a.shapeColor = "red";
  a.velocityX = -2;
  
  
}

function draw() {
  background(0);
  
  
  drawSprites();
  


}





