var firebase;
var doghappy11,doghappy22;
var doghappy1;
var FoodStock,FoodS;
var milk,milk1;

function preload()
{
	//load images here
doghappy11 = loadImage("images/dogImg.png");
doghappy22 = loadImage("images/dogImg1.png");
milk = loadImage("images/milk.png");
}

function setup() {
	createCanvas(800, 700);
  firebase = firebase.database();
  //console.log(firebase);
  doghappy1 = createSprite(300,200,20,20);
  doghappy1.addImage(doghappy11);
  doghappy1.scale = 0.2;  

milk1 = createSprite(200,200,20,20);
milk1.addImage(milk);
milk1.scale = 0.1;

FoodStock = firebase.ref('Food');
FoodStock.on("value",readStock,showError)

  if(keyWentDown(UP_ARROW)){
    doghappy1.addImage(doghappy22);
  }
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  doghappy1.addImage(doghappy22);
  writeStock(FoodS);
  
}
  drawSprites();
  //add styles here
  fill("red")
text(FoodS,400,80);
fill("dark grey")
text("press up arrow to feed drago",325,50);


}

function readStock(data){
  FoodS = data.val();
}
  function writeStock(x){
    if(x<0){
  
      x = 0;
    }
    else {
    x = x-1;
    
    }
   firebase.ref('/').update({
  Food:x
  
  
    })
  }
  
  function showError(){
    console.log("Error in writing to the database");
  } 

