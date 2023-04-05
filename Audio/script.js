const canvas = document.getElementById('sound-machine');
const ctx = canvas.getContext('2d');
const audioPlayer = document.getElementById('audio-player');
const randomButton = document.createElement('button');
const reverseButton = document.createElement('button');
const playPauseResumeButton = document.createElement('button');
const stopButton = document.createElement('button');
const forwardButton = document.createElement('button');
const repeatButton = document.createElement('button');

randomButton.textContent = 'Random';
reverseButton.textContent = 'Reverse';
playPauseResumeButton.textContent = 'Play/Pause/Resume';
stopButton.textContent = 'Stop';
forwardButton.textContent = 'Forward';
repeatButton.textContent = 'Repeat';

let isPlaying = false;

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
  
  randomButton.style.left = centerX - buttonWidth - buttonPadding + 'px';
  randomButton.style.top = startY + 'px';
  reverseButton.style.left = centerX - buttonPadding + 'px';
  reverseButton.style.top = startY + 'px';
  playPauseResumeButton.style.left = centerX + buttonWidth + buttonPadding + 'px';
  playPauseResumeButton.style.top = startY + 'px';
  stopButton.style.left = centerX - buttonWidth - buttonPadding + 'px';
  stopButton.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';
  forwardButton.style.left = centerX + buttonPadding + 'px';
  forwardButton.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';
  repeatButton.style.left = centerX + buttonWidth + buttonPadding + 'px';
  repeatButton.style.top = startY + buttonHeight + buttonPadding * 2 + 'px';
  
  canvas.parentNode.appendChild(randomButton);
  canvas.parentNode.appendChild(reverseButton);
  canvas.parentNode.appendChild(playPauseResumeButton);
  canvas.parentNode.appendChild(stopButton);
  canvas.parentNode.appendChild(forwardButton);
  canvas.parentNode.appendChild(repeatButton);
}

function playAudio() {
  audioPlayer.play();
  isPlaying = true;
}

function pauseAudio() {
  audioPlayer.pause();
  isPlaying = false;
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
}

function reverseAudio() {
  audioPlayer.currentTime = 0;
  audioPlayer.playbackRate = -1;
  playAudio();
}

function forwardAudio() {
  audioPlayer.currentTime += 5;
}

function repeatAudio() {
  audioPlayer.currentTime = 0;
  playAudio();
}

function randomAudio() {
  const duration = audioPlayer.duration;
  const randomTime = Math.floor(Math.random() * duration);
  audioPlayer.currentTime = randomTime;
  playAudio();
}

playPauseResumeButton.addEventListener('click', function() {
  if (isPlaying) {
    pauseAudio();
    playPauseResumeButton.textContent = 'Play';
} else {
    playAudio();
    playPauseResumeButton.textContent = 'Pause';
    }
    });
    
    stopButton.addEventListener('click', function() {
    stopAudio();
    });
    
    reverseButton.addEventListener('click', function() {
    reverseAudio();
    });
    
    forwardButton.addEventListener('click', function() {
    forwardAudio();
    });
    
    repeatButton.addEventListener('click', function() {
    repeatAudio();
    });
    
    randomButton.addEventListener('click', function() {
    randomAudio();
    });
    
    function resizeCanvas() {
    canvas.width = canvas.parentNode.clientWidth;
    canvas.height = canvas.parentNode.clientHeight;
    drawBox();
    drawButtons();
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);