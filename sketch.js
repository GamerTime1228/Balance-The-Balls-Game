const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform1;
var platform2;
var platform3; 

var balls = 20;
var ball1;
balls1 = [];

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  platform1 = new Platform(400, 250, 400, 20);
  platform2 = new Platform(150, 450, 200, 20);
  platform3 = new Platform(650, 450, 200, 20);

  for (var i = 0; i <= 20; i++) {
    var x = 400
    var y = 0
    var ball1 = new Ball(x, y, 50, 50);
    balls1.push(ball1);
  }

}


function draw() 
{
  background("yellow");
  Engine.update(engine);
  textSize(30);
  text("# of balls in total: " + balls, 250, 600);
  text("How many are left?", 250, 650)
  text("Press left and right arrows!", 200, 700);
  textSize(40);
  text("DON'T DROP THE BALLS!!!", 150, 100);

  platform1.display();
  platform2.display();
  platform3.display();

  for(var ball1 of balls1) {
    ball1.display();
  }

}

