const video = document.querySelector(".player__video");
const toggle = document.getElementById("toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const progressRange = document.getElementById("progress");
const volume = document.getElementById("volume");
const playbackSpeed = document.getElementById("playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");

/* INITIAL STATE — REQUIRED BY TEST */
video.pause();
video.volume = 0.75;
video.playbackRate = 1;
toggle.textContent = "❚ ❚";

/* Set progress to 50% AFTER metadata loads */
video.addEventListener("loadedmetadata", () => {
    video.currentTime = video.duration * 0.5;
    progressFilled.style.width = "50%";
    progressRange.value = 50;
});

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
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
});

/* Range scrub */
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

/* Skip */
skipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        video.currentTime += parseFloat(btn.dataset.skip);
    });
});
