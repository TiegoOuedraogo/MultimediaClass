var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set background color
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw sun
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI*2);
ctx.fillStyle = "#FFFF00";
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

// Draw mountains
ctx.beginPath();
ctx.moveTo(0, canvas.height);
ctx.lineTo(200, 300);
ctx.lineTo(400, canvas.height);

ctx.fillStyle = "#8B4513";
ctx.moveTo(120, canvas.height);
ctx.lineTo(350, 150);
ctx.lineTo(600, canvas.height);
ctx.fillStyle = "#8B4513";

ctx.moveTo(240, canvas.height);
ctx.lineTo(500, 200);
ctx.lineTo(800, canvas.height);
ctx.fillStyle = "#8B4513";
ctx.fill();
ctx.closePath();

// Draw ground
ctx.beginPath();
ctx.rect(0, canvas.height-50, canvas.width, 50);
ctx.fillStyle = "#228B22";
ctx.fill();
ctx.closePath();

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

// Draw caption text
ctx.font = "30px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("Welcome to my Cartoon", 50, 50);
