var balloon;
var database;
function preload(){

}


function setup() {
  createCanvas(500,500);
  database = firebase.database();

  var balloon = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  if (keyIsDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  if (keyIsDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }

  if (keyIsDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  if (keyIsDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
}