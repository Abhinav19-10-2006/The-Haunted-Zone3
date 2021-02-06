const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rock , stone_image;
var man , man_image;
var knife , knife_image;
var ax , ax_image;
var gun , gun_image;
var bungla , bungla_image;
var background , background_image;
var score = 0;

function preload(){
 stone_image = loadImage("Images/Stone.png");
 gun_image = loadImage("Images/Gun.png");
 bungla_image = loadImage("Images/Bungla.jpg");
 ax_image = loadImage("Images/AX.png");
 knife_image = loadImage("Images/Knife.png");
 man_image = loadImage("Images/Man.png");
 background_image = loadImage("Images/Background.jpg");
}

function setup(){

    createCanvas(displayWidth,displayHeight);
    //bungla = createSprite(600,400,400,400);
    //bungla.addImage(bungla_image);

    man = createSprite(1300,750,10,10);
    man.addImage(man_image);
    man.scale = 0.5;
} 

function draw(){
    background("white");
    
    score = score + 1;
    text("Score :" + score, 500,50);
    drawSprites();

    if(score <= 1000 ){

        

        if(frameCount % 40 === 0){
        rock = createSprite(150,750,5,5);
        rock.addImage(stone_image);
        rock.scale = 0.5;    
        rock.velocityX = 5;

    }
    text("Now You Are In 2nd Round!!!!" , 750,50);
        textSize(40);

}
    if(score <= 1001 && score >= 2999){
        
          
          if(frameCount % 30 === 0){
          knife = createSprite(90,650,10,10);
          knife.addImage(knife_image);
          knife.scale = 0.5;
          knife.velocityX = 5;

    }
    text("Now You Are In 3rd Round!!!!" , 750,50);
        textSize(40);
}
    if(score <= 3000 && score >= 3999){
        

        if(frameCount % 50 === 0){
        gun = createSprite(100,600,10,10);
        gun.addImage(gun_image);
        gun.scale = 0.5;
        gun.velocityX = 5;
    }
    text("Now You Are In 3rd Round!!!!" , 750,50);
        textSize(40);
}

    if(score <= 4000 && score >= 4999 ){
        text("Now You Are In 4th Round!!!!" , 750,50);
        textSize(40);
    
        if(frameCount % 60 === 0){
        ax = createSprite(140,640,10,10);
        ax.addImage(ax_image);
        ax.scale = 0.5;
        ax.velocityX = 5;
    }
 }
}
