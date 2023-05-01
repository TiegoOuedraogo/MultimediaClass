const canvas = document.getElementById('sound-machine');
const ctx = canvas.getContext('2d');
const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');
const sound3 = document.getElementById('sound3');
const sound4 = document.getElementById('sound4');
const sound5 = document.getElementById('sound5');
const sound6 = document.getElementById('sound6');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');

function drawBox() {
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
}

function drawButtons() {
  const buttonWidth = 100;
  const buttonHeight = 50;
  const buttonPadding = 60;
  const centerX = canvas.width / 2;
  const startY = canvas.height / 2 - buttonHeight / 2;

  button1.style.left = centerX - buttonWidth * 2 - buttonPadding * 2 + 'px';
  button1.style.top = startY + 'px';
  button2.style.left = centerX - buttonWidth - buttonPadding + 'px';
  button2.style.top = startY + 'px';
  button3.style.left = centerX + buttonPadding + 'px';
  button3.style.top = startY + 'px';
  button4.style.left = centerX - buttonWidth * 2 - buttonPadding * 2 + 'px';
  button4.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';
  button5.style.left = centerX - buttonWidth - buttonPadding + 'px';
  button5.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';
  button6.style.left = centerX + buttonPadding + 'px';
  button6.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';

  canvas.parentNode.appendChild(button1);
  canvas.parentNode.appendChild(button2);
  canvas.parentNode.appendChild(button3);
  canvas.parentNode.appendChild(button4);
  canvas.parentNode.appendChild(button5);
  canvas.parentNode.appendChild(button6);
}

button1.addEventListener('click', function() {
  sound1.currentTime = 0;
  sound1.play();
});

button2.addEventListener('click', function() {
  sound2.currentTime = 0;
  sound2.play();
});

button3.addEventListener('click', function() {
  sound3.currentTime = 0;
  sound3.play();
});

button4.addEventListener('click', function() {
  sound4.currentTime = 0;
  sound4.play();
});

button5.addEventListener('click', function() {
  sound5.currentTime = 0;
  sound5.play();
});

// button6.addEventListener('click', function() {
//   sound6.currentTime = 0;
//   sound6.play();
// });

function resizeCanvas() {
  canvas.width = canvas.parentNode.clientWidth;
  canvas.height = canvas.parentNode.clientHeight;
  drawBox();
  drawButtons();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
