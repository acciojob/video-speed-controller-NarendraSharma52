const video = document.querySelector(".player__video");
const toggle = document.getElementById("toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const progressRange = document.getElementById("progress");
const volume = document.getElementById("volume");
const playbackSpeed = document.getElementById("playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");

/* Play / Pause */
toggle.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        toggle.textContent = "►";
    } else {
        video.pause();
        toggle.textContent = "❚ ❚";
    }
});

/* Update progress */
video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
    progressRange.value = percent;
});

/* Click progress bar */
progress.addEventListener("click", (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
});

/* Range progress scrub */
progressRange.addEventListener("input", () => {
    video.currentTime = (progressRange.value / 100) * video.duration;
});

/* Volume */
volume.addEventListener("input", () => {
    video.volume = volume.value;
});

/* Playback speed */
playbackSpeed.addEventListener("input", () => {
    video.playbackRate = playbackSpeed.value;
});

/* Skip buttons */
skipButtons.forEach(button => {
    button.addEventListener("click", () => {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});
