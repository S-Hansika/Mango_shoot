const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bg_img;
var mango1, mango2, mango3, mango4, mango5, mango_img, c_img;
var  ml2, ml3, ml4, ml5, ml_img;
var  mg2, mg3,mg4,mg5;
var  c2, c3, c4, c5;
var ground;
var cannon;
var cannonBall;
var balls = [];
var numberOfBalls= 6;
var score=0;
var angle;


function preload() {
  bg_img = loadImage('bg.jpg');
  mango_img = loadImage('mango.png');
  c_img= loadImage('circle.png');
  ml_img= loadImage('mango_leaf.png')
}



function setup() {

  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 5;

  ground = new Ground(500, 600, 1000, 20);
  
  mango2 = createSprite(700,60);
  mango2.addImage(mango_img);
  mango2.scale= 0.095;

  mango3 = createSprite(900,250);
  mango3.addImage(mango_img);
  mango3.scale= 0.005;

  mango4 = createSprite(800,130);
  mango4.addImage(mango_img);
  mango4.scale= 0.005;

  mango5 = createSprite(900,180);
  mango5.addImage(mango_img);
  mango5.scale= 0.005;

  mg2= createSprite(700,60);
  mg2.addImage(c_img);
  mg2.scale= 0.4;


  mg3= createSprite(900,250);
  mg3.addImage(c_img);
  mg3.scale= 0.4;


  mg4= createSprite(800,130);
  mg4.addImage(c_img);
  mg4.scale= 0.4;


  mg5= createSprite(900,180);
  mg5.addImage(c_img);
  mg5.scale= 0.4;


  c2= new Circle(700,60);
  c3= new Circle(900,250);
  c4= new Circle(800,130);
  c5= new Circle(900,180);


  cannon = new Cannon(180, 500, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);


}


function draw() {
  background(51);
  image(bg_img, 0, 0, width, height);

  ground.show();
  
  c2.display();
  c3.display();
  c4.display();
  c5.display();



  cannon.display();
  cannonBall.display();

  collision_d();

  mg2.display();
  mg3.display();
  mg4.display();
  mg5.display();

  fill('black');
  textAlign("center");
  textSize(40);
  text("Shoot The Mangoes", 400,50);

  fill("black");
  textAlign("center");
  textSize(30);
  text("Remaining Balls : " + numberOfBalls, 200, 100);
  Engine.update(engine);

  fill("black");
  textAlign("center");
  textSize(30);
  text("Score : " + score, 130, 130);
  Engine.update(engine);

  if(score==4){
    fill("blue");
  textAlign("center");
  textSize(60);
  text("YOU WIN :D", 400, 300);
  }
  if(numberOfBalls==0 && score< 3){
    fill("red");
  textAlign("center");
  textSize(60);
  text("YOU LOOSE :(", 400, 300);
  }
  Engine.update(engine);
  drawSprites();
}

function collision_d(){
  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);

    var c2Collision = Matter.SAT.collides(
      c2.body,
      balls[i].body
    );
    if (c2Collision.collided) {
      console.log("hello");
      mg2= new Mango(700,60);
      mango2.destroy();
      c2= new Circle(2000,200,20,20);
      ml2= createSprite(700,60);
      ml2.addImage(ml_img);
      ml2.scale= 0.08;
      score+=1;
    }

    var c3Collision = Matter.SAT.collides(
      c3.body,
      balls[i].body
    );
    if (c3Collision.collided) {
      console.log("hello");
      mg3= new Mango(900,250);
      mango3.destroy();
      c3= new Circle(2000,200,20,20);
      ml3= createSprite(900,250);
      ml3.addImage(ml_img);
      ml3.scale= 0.08;
      score+=1;
    }

    var c4Collision = Matter.SAT.collides(
      c4.body,
      balls[i].body
    );
    if (c4Collision.collided) {
      console.log("hello");
      mg4= new Mango(800,130);
      mango4.destroy();
      c4= new Circle(2000,200,20,20);
      ml4= createSprite(800,130);
      ml4.addImage(ml_img);
      ml4.scale= 0.08;
      score+=1;
    }

    var c5Collision = Matter.SAT.collides(
      c5.body,
      balls[i].body
    );
    if (c5Collision.collided) {
      console.log("hello");
      mg5= new Mango(900,180);
      mango5.destroy();
      c5= new Circle(2000,200,20,20);
      ml5= createSprite(900,180);
      ml5.addImage(ml_img);
      ml5.scale= 0.08;
      score+=1;
    }
  }
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    if(numberOfBalls > 0){
      balls[balls.length - 1].shoot();
      numberOfBalls-=1;
    }
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, i) {
  if (ball) {
    ball.display();
  }
}