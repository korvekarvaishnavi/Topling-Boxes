const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    
    box1 = new Box(200,100,50,50);
    box2 = new Box(180,20,50,70);
    ground = new Ground(200,350,400,30);
    
}

function draw(){
    background(0);
    Engine.update(myengine);
    box1.display();
    box2.display();
    ground.display();
}