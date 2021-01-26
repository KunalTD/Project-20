var tom, tomanimation1, tomanimation2 ,tomanimation3;
var jerry, jerryanimation1, jerryanimation2, jerryanimation3;
var bg



function preload() 
{
    bg=loadImage("images/garden.png");
    
    tomanimation1=loadAnimation("images/cat1.png");
    tomanimation2=loadAnimation("images/cat2.png", "images/cat3.png");
    tomanimation3=loadAnimation("images/cat4.png");

    jerryanimation1=loadAnimation("images/mouse1.png");
    jerryanimation2=loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryanimation3=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(870,600);
    tom.addAnimation("tomsitting", tomanimation1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerry1", jerryanimation1);
    jerry.scale=0.1;

}

function draw() 
{

    background(bg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("tomstanding", tomanimation3);
        tom.changeAnimation("tomstanding");

        jerry.addAnimation("jerry3", jerryanimation3);
        jerry.changeAnimation("jerry3");
    }

    drawSprites();
}


function keyPressed()
{
     if(keyCode===LEFT_ARROW)
     {
         tom.velocityX=-5;
         tom.addAnimation("tomrunning", tomanimation2);
         tom.changeAnimation("tomrunning");

         jerry.addAnimation("jerry2", jerryanimation2);
         jerry.changeAnimation("jerry2");
     }
  


}
