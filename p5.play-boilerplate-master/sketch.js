var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(20,20,50,50);
  bullet.shapeColor = color(0,0,0);

  wall = createSprite(1200,200,thicknes,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0,0,0);  

bullet.velocityX = speed;


thickness = random(22,83);

speed = random(223,321);
weight = random(30,52);

bullet.collide(wall);


if(wall.x - bullet.x < (bullet.width + wall.width)/2){
bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500;

if(bullet.isTouching(wall)){
  bullet.velocityX = 0;

  if(deforation > 180){
    bullet.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformatiom > 100){
    bullet.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
    bullet.shapeColor = color(0,255,0);
  }

}
}

if(hasCollided(bullet,wall)){
  bullet.VelocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thicknes * thickness);


  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor = color(0,255,0);

  }
}

  drawSprites();

}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}