const controls = document.querySelector(".controls-main");
const video = document.querySelector("video");
const videoBtn = document.querySelector(".btn-play");
const volumeBtn = document.querySelector(".volume-btn");
const volumeShow = document.querySelector(".volume-show");
const playSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
const pauseSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M272 63.1c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48s48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM48 63.1c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448S96 426.5 96 400v-288C96 85.49 74.51 63.1 48 63.1z"/></svg>`;
const volumeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M444.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406c-8.406 10.25-6.906 25.37 3.375 33.78C425.5 228.4 432 241.8 432 256c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406C467.1 311.6 480 284.7 480 256S467.1 200.4 444.6 181.9zM505.1 108c-10.22-8.344-25.34-6.906-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C508.6 172.9 528 213.3 528 256s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.437C550.2 367.1 576 313.1 576 256S550.2 144.9 505.1 108zM333.2 34.84c-11.5-5.187-25.01-3.116-34.43 5.259L163.8 160H80c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C304.7 477.2 312.3 480 320 480c4.438 0 8.959-.9313 13.16-2.837C344.7 472 352 460.6 352 448V64C352 51.41 344.7 39.1 333.2 34.84z"/></svg>`;
const muteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M301.2 34.85c-11.5-5.188-25.02-3.122-34.44 5.253L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z"/></svg>`;
const videoInput = document.querySelector("#videoInput");
const videoSource = document.querySelector("#videoSource");
const chooseVideo = document.querySelector(".choose-video");

videoInput.onchange = function () {
  videoSource.src = URL.createObjectURL(videoInput.files[0]);
  video.load();
};

chooseVideo.addEventListener("click", (e) => {
  videoInput.click();
});

function showControls() {
  controls.style.opacity = 1;
}

function hideControls() {
  controls.style.opacity = 0;
}

function show2hideControls(n) {
  if (controls.style.opacity == 0) {
    showControls();
    setTimeout(hideControls, n);
  }
}

function playVideo() {
  if (!video.paused) {
    videoBtn.innerHTML = playSvg;
    video.pause();
  } else {
    videoBtn.innerHTML = pauseSvg;
    video.play();
  }
}

function seekButton(n) {
  video.currentTime += n * 5;
}

video.addEventListener("timeupdate", () => {
  let percent = (video.currentTime / video.duration) * 100;
  document.querySelector(".progress").style.width = `${percent}%`;
});

function volumeControl(n) {
  show2hideControls(3000);
  if (0 <= video.volume <= 1) {
    let volume = (video.volume + n * 0.2).toFixed(1);
    if (0 <= volume && volume <= 1) {
      video.volume = volume;
    }
    volumeShow.textContent = video.volume * 100 + "%";
    if (video.volume === 0) {
      video.muted = true;
      volumeBtn.innerHTML = muteSvg;
      setAnimation(volumeShow, 200);
    } else {
      video.muted = false;
      volumeBtn.innerHTML = volumeSvg;
      setAnimation(volumeShow, 200);
    }
  }
}

function setAnimation(elm, n) {
  elm.style.opacity = 0.2;
  setTimeout(() => {
    elm.style.opacity = 1;
  }, n);
}

document.onkeydown = (e) => {
  switch (e.key) {
    case "ArrowRight":
      seekButton(1);
      break;
    case "ArrowLeft":
      seekButton(-1);
      break;
    case "ArrowUp":
      volumeControl(1);
      break;
    case "ArrowDown":
      volumeControl(-1);
      break;
    case " ":
      playVideo();
      if (video.paused) {
        showControls();
      } else {
        hideControls();
      }
      break;
    case "Enter":
      fullScreen();
      break;
  }
};

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    volumeBtn.innerHTML = volumeSvg;
  } else {
    video.muted = true;
    volumeBtn.innerHTML = muteSvg;
  }
}

function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function stopVideo() {
  if (video.currentTime !== 0) {
    video.currentTime = 0;
    video.play();
  }
}