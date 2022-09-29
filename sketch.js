var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
 backgroundImage = loadImage("planodefundo.png");
  carroimg = loadImage("car1.png");
  carroimg2 = loadImage("car2.png");
  estrada = loadImage("pista.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  //se houver 2 players, chamar a função play
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
