//your JS code here. If required.
document.getElementById('sound1').addEventListener('click', function() {
   // Code to play sound1
	var sound1 = new Audio('sounds/sound1.mp3');
sound1.play();
});

document.querySelector('.stop').addEventListener('click', function() {
   // Code to stop all sounds
	sound1.pause();
sound1.currentTime = 0;
});