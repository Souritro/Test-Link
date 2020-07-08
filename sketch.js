var database, form1;
var player,game;
var gameState,playerCount;
function setup(){
database= firebase.database()
canvas=createCanvas(800,700);
//form1= new Form(400,350,60,60)
game= new Gamestate();
game.getState()
game.gamestateChecker();
}
function draw(){
    
}


