// // initialize canvas and context
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // load sprite sheet image
// const spriteSheet = new Image();
// spriteSheet.onload = () => {
//   ctx.drawImage(spriteSheet, 0, 0);
// };
// spriteSheet.src = 'img/spritesheet.png';


// // initialize person sprite
// const person = {
//   frameX: 0,
//   frameY: 0,
//   x: 0,
//   y: 0,
//   speed: 4,
// };

// // load data from JSON file
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'data.json');
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     // use data to set person's initial position and speed
//     person.x = data.person.x;
//     person.y = data.person.y;
//     person.speed = data.person.speed;
//     // start animation loop
//     requestAnimationFrame(animate);
//   }
// };
// xhr.send();

// // animation loop function
// function animate() {
//   // clear canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // update person sprite frame
//   if (person.frameX < 3) {
//     person.frameX++;
//   } else {
//     person.frameX = 0;
//   }

//   // move person sprite
//   person.x += person.speed;
//   if (person.x > canvas.width) {
//     person.x = -64; // reset person's position if it goes off the screen
//   }

//   // draw person sprite
//   ctx.drawImage(person, person.frameX * 64, person.frameY * 64, 64, 64, person.x, spritesheet.y, 64, 64);

//   // request next animation frame
//   requestAnimationFrame(animate);
// }

var Scene = {
  canvas : undefined,
  canvasContext : undefined,
sprite: undefined
};

Scene.start = function () {
// Get the canvas and it's context.
  Scene.canvas = document.getElementById("myCanvas");
  Scene.canvasContext = Scene.canvas.getContext("2d");

// Setup the parrot to be displayed.
  Scene.sprite = person;

// Attach the image to be used for the sprite.
Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

// Wait till the parrot image is loaded before starting the animation.
Scene.sprite.img.onload = function() {  
Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
   Scene.mainLoop();
}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
  Scene.canvasContext.fillStyle = "white";
  Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
  Scene.clearCanvas();
  Scene.update();
  Scene.draw();

// Animate at 24 frames a second.
  window.setTimeout(Scene.mainLoop, 1000 /24);
};

Scene.update = function () {
// Set the canvas width to be that of the display Window. Which helps if you resize the window.
 Scene.canvas.width = window.innerWidth;

// Set the location of the next frame. 
 Scene.sprite.offset+=24;
if(Scene.sprite.offset>Scene.canvas.width)
 Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,Scene.sprite.offset,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);

// Advance to the next frame.
Scene.sprite.frame++;

// At the end of the sprite sheet, start at the first frame.
if(Scene.sprite.frame==Scene.sprite.frames.length)
Scene.sprite.frame=0;
};