// Get the canvas element from the HTML file
const canvas = document.getElementById("cartoon-canvas");
const ctx = canvas.getContext("2d");

// Draw the background
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the sun
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#FFD700";
ctx.fill();

// Draw ground
ctx.beginPath();
ctx.rect(0, canvas.height-50, canvas.width, 50);
ctx.fillStyle = "#228B22";
ctx.fill();
ctx.closePath();

// // Draw stars
for(var i=0; i<100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height/2;
    var radius = Math.random() * 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

// Initialize cloud variables
let cloud1_x = 200;
let cloud1_y = 150;
let cloud2_x = 50;
let cloud2_y = 50;
let cloud3_x = 350;
let cloud3_y = 100;

// Start the animation loop
function draw() {
  // Clear the canvas
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // // Draw the sky
  // ctx.fillStyle = 'skyblue';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // // Draw the sun
  // ctx.fillStyle = 'yellow';
  // ctx.beginPath();
  // ctx.arc(100, 100, 50, 0, Math.PI * 2);
  // ctx.fill();

  // Draw the clouds
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(cloud1_x, cloud1_y, 30, 0, Math.PI * 2);
  ctx.arc(cloud1_x + 30, cloud1_y, 30, 0, Math.PI * 2);
  ctx.arc(cloud1_x + 60, cloud1_y, 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2_x, cloud2_y, 20, 0, Math.PI * 2);
  ctx.arc(cloud2_x + 20, cloud2_y, 20, 0, Math.PI * 2);
  ctx.arc(cloud2_x + 40, cloud2_y, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud3_x, cloud3_y, 40, 0, Math.PI * 2);
  ctx.arc(cloud3_x + 30, cloud3_y, 40, 0, Math.PI * 2);
  ctx.fill();

  // Move the clouds
  // if (cloud1_x > canvas.width + 40) {
  //   cloud1_x = -40;  // Move to the left edge
  // } else {
  //   cloud1_x += 1;  // Move to the right
  // }

  // if (cloud2_y < -20) {
  //   cloud2_y = canvas.height + 20;  // Move to the bottom edge
  // } else {
  //   cloud2_y -= 1;  // Move upwards
  // }

  if (cloud3_x < -70) {
    cloud3_x = canvas.width + 70;  // Move to the right edge
  } else {
    cloud3_x -= 1;  // Move to the left
  }

  // Request the next animation frame
  // requestAnimationFrame(draw);
}

draw();


// Draw the mountains
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(200, 200);
ctx.lineTo(400, 400);
ctx.closePath();
ctx.fillStyle = "#a9a9a9";
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(400, 200);
ctx.lineTo(600, 400);
ctx.closePath();
ctx.fillStyle = "#808080";
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(600, 200);
ctx.lineTo(800, 400);
ctx.closePath();
ctx.fillStyle = "#696969";
ctx.fill();

//Draw the trees
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(150, 100);
ctx.lineTo(200, 300);
ctx.fillStyle = "#228B22";
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(130, 300, 20, 90);

// Draw the half-moon
ctx.beginPath();
ctx.arc(700, 100, 45,135, Math.PI, 2*Math.PI);
ctx.lineTo(650, 100);
ctx.fillStyle = "#ffff99";
ctx.fill();

ctx.arc(100, 50, 50, Math.PI, 2*Math.PI);


// Draw living quarters
ctx.beginPath();
ctx.rect(300, canvas.height-250, 200, 200);
ctx.fillStyle = "#FF8C00";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

// Draw windows
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(320, canvas.height-230, 40, 40);
ctx.fillRect(440, canvas.height-230, 40, 40);

// Draw door
ctx.fillStyle = "#8B4513";
ctx.fillRect(380, canvas.height-150, 40, 100);

// Draw fence
for(var i=0; i<10; i++) {
	ctx.beginPath();
	ctx.moveTo(i*80, canvas.height);
	ctx.lineTo(i*120, canvas.height);
	ctx.strokeStyle = "#8B4513";
	ctx.stroke();
	ctx.closePath();
}
    
    // Draw the caption text
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Welcome to Cartoon Scene!", 250, 50);
