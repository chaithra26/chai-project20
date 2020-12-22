var car,wall,carImage;
var speed,weight;

function preload(){
  carImage=loadImage("car.jpg");
}
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255,0,0);
  car.addImage(carImage);
  car.scale=0.9;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapecolor=color(255,0,0);
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }
  }
  drawSprites();
}