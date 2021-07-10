const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bg;
var ground, base1, base2, base3;
var stone, rope;
var can11, can12, can13, can14, can15, can16;
var can21, can22, can23, can24, can25, can26;
var can31, can32, can33, can34, can35, can36;
var hit=0;
var score = 0;
var theme = 0;





function preload(){

  getTime();

  bg = 255;

}

function setup() {
  createCanvas(2500, 1100);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-50, width, 50);
  base1 = new Ground(2100, 350, 500, 50);
  base2 = new Ground(1500, 650, 500, 50);
  base3 = new Ground(2100, 950, 500, 50);

  stone = new Stone(500, height/2, 80, 80);
  
  rope = new Chain(500, height/2, stone);

  can11 = new Can1(2050, 750);
  can12 = new Can1(2000, 850);
  can13 = new Can1(2100, 850);
  can14 = new Can1(2200, 850);
  can15 = new Can1(2150, 750);
  can16 = new Can1(2100, 650);

  can21 = new Can2(2000, 300);
  can22 = new Can2(2100, 300);
  can23 = new Can2(2200, 300);
  can24 = new Can2(2050, 200);
  can25 = new Can2(2150, 200);
  can26 = new Can2(2100, 100);

  can31 = new Can1(1450, 500);
  can32 = new Can1(1550, 500);
  can33 = new Can1(1500, 600);

  can34 = new Can2(1500, 400);
  can35 = new Can2(1400, 600);
  can36 = new Can2(1600, 600);

  Engine.run(engine);
}

function draw() {
  
  background(bg); 

  ground.display();
  base1.display();
  base2.display();
  base3.display();

  stone.display();

  rope.display();

  //DISPLAY
  can11.display();
  can12.display();
  can13.display();
  can14.display();
  can15.display();
  can16.display();

  can21.display();
  can22.display();
  can23.display();
  can24.display();
  can25.display();
  can26.display();

  can31.display();
  can32.display();
  can33.display();
  can34.display();
  can35.display();
  can36.display();

  //SCORE

  can11.score();
  can12.score();
  can13.score();
  can14.score();
  can15.score();
  can16.score();

  can21.score();
  can22.score();
  can23.score();
  can24.score();
  can25.score();
  can26.score();

  can31.score();
  can32.score();
  can33.score();
  can34.score();
  can35.score();
  can36.score();


  

  

  var result = Math.round(score/100)*100

  push();
  textSize(40);
  strokeWeight(5);
  stroke(255);
  fill(0);
  text("Press space to get another hit!", 1000, 200);
  text("Hits taken: "+ hit, 100, 100);
  text("Score: "+ result, 100, 950);
  
  pop();

  showTheme();
  


  

}

function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}
function mouseReleased(){

  rope.fly();

}
function keyPressed(){

  if((keyCode===32&&stone.body.speed<2)||(keyCode===32&&stone.body.position.x>2500)||(keyCode===32&&stone.body.position.x<0)){

    Matter.Body.setPosition(stone.body, {x: 500, y: 550});
    rope.attach(stone);
    hit+=1;

  }

}
async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  var dt = responsejson.datetime;
  var hr = dt.slice(11, 13);
  var mn = dt.slice(14, 16);
  var sc = dt.slice(17, 19);

  //MORNING
  if(hr>=06&&hr<12){
    bg = loadImage("images/morning.jpg");
    theme = "Morning";
  }

  //AFTERNOON
  else if(hr>=12&&hr<16){
    bg = loadImage("images/afternoon.jpg");
    theme = "Noon";
  }

  //EVENING
  else if(hr>=16&&hr<20){
    bg = loadImage("images/evening.jpg");
    theme = "Evening";
  }

  //NIGHT
  else {
    bg = loadImage("images/night.jpg");
    theme = "Night";
  }

}

function showTheme(){
  if (theme==="Morning"){

  push();
  textAlign(CENTER);
  textSize(40);
  strokeWeight(5);
  stroke(255);
  fill(0);
  text("Theme: "+ theme, width/2, 100);
  pop();

  }

  else if (theme==="Noon"){

  push();
  textAlign(CENTER);
  textSize(40);
  strokeWeight(5);
  stroke(255);
  fill(0);
  text("Theme: "+ theme, width/2, 100);
  pop();

  }

  else if (theme==="Evening"){

    push();
    textAlign(CENTER);
    textSize(40);
    strokeWeight(5);
    stroke(255);
    fill(0);
    text("Theme: "+ theme, width/2, 100);
    pop();
  
    }

  else if (theme==="Night"){

    push();
    textAlign(CENTER);
    textSize(40);
    strokeWeight(5);
    stroke(255);
    fill(0);
    text("Theme: "+ theme, width/2, 100);
    pop();
    
    }
  

  
    
}


