var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Background
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Person Sprite
var person = new Image();
// person.src = "persons.gif";
var personX = 50;
var personY = 200;

// Dog Sprite
var dog = new Image();
dog.src = "person.png";
var dogX = 100;
var dogY = 220;

// Car Sprite
var car = new Image();
car.src = "car.png";
var carX = 500;
var carY = 250;

function draw() {
  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Sprites
  ctx.drawImage(person, personX, personY);
  ctx.drawImage(dog, dogX, dogY);
  ctx.drawImage(car, carX, carY);

  // Move Car
  carX -= 5;

  // Repeat Animation
  if (carX < -200) {
    carX = 1000;
  }
}

setInterval(draw, 30);
