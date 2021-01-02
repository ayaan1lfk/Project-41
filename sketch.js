var boy;
var thunderbolt,thunderImage;
var drops;

function preload(){
    boy_walking = loadImage('images/Walking Frame/walking_1.png');
    thunderImage = loadAnimation('images/thunderbolt/1.png','images/thunderbolt/2.png','images/thunderbolt/3.png','images/thunderbolt/4.png')
}

function setup(){
    canvas = createCanvas(400,800);
    boy = createSprite(200,500,10,10);
    boy.addImage("boy",boy_walking);
    thunderbolt = createSprite(200,5,10,10)
    thunderbolt.addAnimation("thunder",thunderImage);
}

function draw(){
    background("black");
    drops = createSprite(200,100,10,10);
    
    drops.shapeColor = "blue";
    drawSprites();
}

