var wall,thickness;
var bullet ,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(10,200,40,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
}

function draw() {
  background(0);  

  if (hasCollided(bullet,wall)){
    //stop the bullet
    bullet.velocityX = 0;

    //calculate damage to wall
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();

}

function hasCollided(lBullet,lwall){

  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}