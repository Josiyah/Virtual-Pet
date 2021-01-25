var dog, happyDog, database, foodS, foodStock, dogImage, dogImage2;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
  
  dog = createSprite(250,250)
  database = firebase.database();

  dog.addImage(dogImage);
  dog.scale = 0.15;


}

function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();


  textSize(4);
  fill("blue");
  stroke(4);
  text("Use UP ARROW to feed the dog");
  text("Food remaining:"+foodS,170,200);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
  })
}
//
