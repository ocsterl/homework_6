var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.5;
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 2.0;
});

document.querySelector("#skip").addEventListener("click", function() {
	video.onseeking = function();
});

