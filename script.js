const video = document.getElementById("video");
const toggleButton = document.getElementById("toggle");
const progressBar = document.getElementById("progress");
const progressFilled = document.getElementById("progress__filled");
const volumeController = document.getElementById("volume");
const playBackSpeedController = document.getElementById("playbackSpeed");
const rewindButton = document.getElementById("rewind");
const skipButton = document.getElementById("skip");

toggleButton.addEventListener('click' , () => {
    if(video.paused) {
        video.play();
        toggleButton.innerText = " ❚ ❚";
    }
    else {
        video.pause();
        toggleButton.innerText = "►";
    }
})

video.addEventListener("timeUpdate", () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    progressFilled.style.width = `${progress}%`;
    console.log(progressFilled);
})

progressBar.addEventListener("input", () => {
    const value = progressBar.value;
    video.currentTime = (value/100) * video.duration;
    console.log(video.currentTime);
})

volumeController.addEventListener("input", () => {
    video.volume = volumeController.value;
    console.log(video.volume);
})

playBackSpeedController.addEventListener("click", () => {
    video.playbackRate = Number(playBackSpeedController.value);
    console.dir(video);
    console.log(video.playbackRate);
})

rewindButton.addEventListener("click", () => {
    video.currentTime -= 10;
})

skipButton.addEventListener("click", () => {
    video.currentTime += 25;
})
