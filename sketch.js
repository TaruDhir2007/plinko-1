const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
function preload() {

  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(500 , 950,width, height);
   
}

function draw(){

    background(0);

    Engine.update(engine);

    ground1.display();
  
}

