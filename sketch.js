var player,playeridle,playerrun,ground;

function preload(){
    bg=loadImage("background.png")
    playeridle=loadAnimation("player/movement/adventurer-idle-00.png","player/movement/adventurer-idle-01.png",
    "player/movement/adventurer-idle-02.png","player/movement/adventurer-idle-03.png");
    playerrun=loadAnimation("player/movement/adventurer-run-00.png","player/movement/adventurer-run-01.png","player/movement/adventurer-run-02.png","player/movement/adventurer-run-03.png","player/movement/adventurer-run-04.png","player/movement/adventurer-run-05.png")
  // enemyimage =loadImage("druid/ezgif.com-gif-maker.gif");
  // enemy = createImg("druid/ezgif.com-gif-maker.gif");
}

function setup(){
    createCanvas(1365,653);
    ground=createSprite(337.5,355,895,20);
    ground.visible=false;
   //ground.setCollider("rectangle",0,0,895,20);
    player=createSprite(700,200,100,100);
   // player.setCollider("rectangle",player.x+25,player.y,10,20);
    player.addAnimation("idle",playeridle);
    player.scale=2.35;
   // player.velocityY=4;

}

function draw(){
    background(bg);
   // player.x=mouseX;
   // player.y=mouseY;
  //  enemy1.velocityX=3;
   // enemy.position(enemy1.x-100,enemy1.y-150);
   console.debug(mouseX,"x position");
   console.debug(mouseY,"y position");
   if(keyDown("space")){
       player.velocityY=-4;
   }
   player.velocityY=player.velocityY+0.8;
   if (keyDown(LEFT_ARROW)) {
       player.x=player.x-4;
   }
   if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+4;
    player.changeAnimation("run",playerrun);
}
   player.collide(ground);

    drawSprites();
}