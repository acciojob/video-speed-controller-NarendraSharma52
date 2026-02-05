const video = document.getElementById("video");
const toggleButton = document.getElementById("toggle");
const progressBar = document.getElementById("progress");
const volumeController = document.getElementById("volume");
const playbackSpeedController = document.getElementById("playbackSpeed");
const rewindButton = document.getElementById("rewind");
const skipButton = document.getElementById("skip");

/* Play / Pause */
toggleButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        toggleButton.innerText = "❚ ❚";
    } else {
        video.pause();
        toggleButton.innerText = "►";
    }
});

/* Update progress bar */
video.addEventListener("timeupdate", () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

/* Scrub video */
progressBar.addEventListener("input", () => {
    video.currentTime = (progressBar.value / 100) * video.duration;
});

/* Volume control */
volumeController.addEventListener("input", () => {
    video.volume = volumeController.value;
});

/* Playback speed */
playbackSpeedController.addEventListener("input", () => {
    video.playbackRate = playbackSpeedController.value;
});

/* Rewind 10 seconds */
rewindButton.addEventListener("click", () => {
    video.currentTime -= 10;
});

/* Skip 25 seconds */
skipButton.addEventListener("click", () => {
    video.currentTime += 25;
});
