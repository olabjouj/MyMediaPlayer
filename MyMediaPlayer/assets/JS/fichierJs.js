var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
var volume = document.querySelector('#volume');
var rwdBtn = document.querySelector('.rwd');
var fwdBtn = document.querySelector('.fwd');
var timelabel = document.querySelector(".time");
var fullscreenbtn = document.getElementById('fullscreenbtn');
var mutebtn = document.getElementById("mutebtn");
var seekslider = document.getElementById("seekslider");
var curtimetext = document.getElementById("curtimetext");
var durtimetext = document.getElementById("durtimetext");


function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
        video.play();

    } else {
        btn.className = "play";
        video.pause();

    }
}
btn.onclick = function () {
    togglePlayPause();
};
video.addEventListener('timeupdate', function () {
    console.log("test0", video)
    var juicePosition = video.currentTime / video.duration;
    juice.style.width = juicePosition * 100 + "%";
    if (video.ended) {
        btn.className = "play";
    }
});

volume.addEventListener('change', function (x) {
    video.volume = x.currentTarget.value / 100;
});

rwdBtn.onclick = function () {
    console.log("test1");
    video.currentTime -= 10;

}
fwdBtn.onclick = function () {
    console.log("test2");
    video.currentTime += 10;
    if (video.currentTime >= video.duration || video.paused) {
        video.pause();
        video.currentTime = 0;
        Btn.textContent = "play";
    }
}
video.ontimeupdate = function () {
    var minutes = Math.flour(video.currentTime / 60);
    var seconds = Math.floor(video.currentTime - minutes * 60);
    var minuteValue;
    var secondValue;

    if (minutes < 10) {
        minuteValue = "0" + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = "0" + seconds;
    } else {
        secondValue = seconds;
    }
    mediaTime = minuteValue + ":" + secondValue;
    timelabel.textContent = mediaTime;

};
fullscreenbtn.addEventListener('click', toggleFullScreen, false)

function toggleFullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.normalize.webkitRequestFullScreen) {
        video.normalize.webkitRequestFullScreen();
    }
}

mutebtn.addEventListener("click", vidmute, false);
function vidmute() {
    if (video.muted) {
        video.muted = false;
        mutebtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        mutebtn.innerHTML = "Unmute";
    }
}
seekslider.addEventListener("change", videoSeek, false);
function videoSeek() {
    var seekto = video.duration * (seekslider.value / 100);
    video.currentTime = seekto;
}
video.addEventListener("timeupdate", seektimeupdate, false);
function seektimeupdate() {
    var nt = video.currentTime * (100 / video.duration);
    seekslider.value = nt;
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if (cursecs < 10) { cursecs = "0" + cursecs; }
    if (dursecs < 10) { dursecs = "0" + dursecs; }
    if (curmins < 10) { curmins = "0" + curmins; }
    if (durmins < 10) { durmins = "0" + durmins; }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}