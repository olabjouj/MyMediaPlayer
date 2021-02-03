var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
var volume = document.querySelector('#volume');
var rwdBtn = document.querySelector('.rwd');
var fwdBtn = document.querySelector('.fwd');
var timelabel = document.querySelector(".time");
var fullscreenbtn = document.getElementById("fullscreenbtn")


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

