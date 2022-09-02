var bg, spacebg_image
var astronaut, astronaut_image
var UFO1, UFO_image1
var UFO2, UFO_image2
var UFO3, UFO_image3

function preload() {
  spacebg_image = loadImage ("spaceBackground_image.jpg");
  astronaut_image = loadImage ("astronaut_image.jpg");
  UFO1 = loadImage ("UFO_image1.jpg");
  UFO2 = loadImage ("UFO_image2.jpg");
  UFO3 = loadImage ("UFO_image3.jpg");
}

function setup() {
  astronaut = createSprite (100, 150);
  astronaut.addImage (astronaut_image); 
  UFO1 = createSprite (370, 50);
  UFO1.addImage (UFO_image1);
  UFO2 = createSprite (380, 125);
  UFO2.addImage (UFO_image2);
  UFO3 = createSprite (350, 220);
  UFO3.addImage (UFO_image3);
}

function draw() {


  drawSprites();
}