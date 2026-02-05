const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");

/* Play / Pause */
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = "❚ ❚";
    } else {
        video.pause();
        toggle.textContent = "►";
    }
}

toggle.addEventListener("click", togglePlay);

/* Update progress */
video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

/* Scrub */
progress.addEventListener("click", e => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
});

/* Volume & Speed */
sliders.forEach(slider => {
    slider.addEventListener("input", () => {
        video[slider.id === "volume" ? "volume" : "playbackRate"] = slider.value;
    });
});

/* Skip */
skipButtons.forEach(button => {
    button.addEventListener("click", () => {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});
