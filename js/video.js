var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = "100%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

var speed = 1.0;

document.querySelector("#slower").addEventListener("click", function() {
	speed = speed - speed*(0.1)
	video.playbackRate = speed;
	console.log("Updated Speed:" + speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed = speed + speed*(0.1)
	video.playbackRate = speed;
	console.log("Updated Speed:" + speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5.0 > video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime = video.currentTime + 5.0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volunme = this.value/100;
});

document.querySelector('#old').addEventListener('click', function(){
	video.classList.add("oldTime");
});