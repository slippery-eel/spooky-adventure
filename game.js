const screenImgs = document.getElementById("screen-imgs");
const title = document.getElementById("screen-title");
const text = document.getElementById("screen-text");
const choices = document.getElementById("choices");
const backBtn = document.getElementById("back-btn");
const audioBtn = document.getElementById("audio-btn");

const history = [];
let audioEnabled = false;
let currentScreenId = null;

let currentMusic = null;
let currentMusicSrc = null;

let currentAmbience = null;
let currentAmbienceSrc = null;

function updateMusic(src, volume = 0.6) {
  if (!audioEnabled) return;
  if (src === currentMusicSrc) { if (currentMusic) currentMusic.volume = volume; return; }
  if (currentMusic) { currentMusic.pause(); currentMusic = null; }
  currentMusicSrc = src;
  if (!src) return;
  currentMusic = new Audio(src);
  currentMusic.loop = true;
  currentMusic.volume = volume;
  currentMusic.play().catch(() => {});
}

function updateAmbience(src, volume = 0.6) {
  if (!audioEnabled) return;
  if (src === currentAmbienceSrc) { if (currentAmbience) currentAmbience.volume = volume; return; }
  if (currentAmbience) { currentAmbience.pause(); currentAmbience = null; }
  currentAmbienceSrc = src;
  if (!src) return;
  currentAmbience = new Audio(src);
  currentAmbience.loop = true;
  currentAmbience.volume = volume;
  currentAmbience.play().catch(() => {});
}

audioBtn.addEventListener("click", () => {
  audioEnabled = !audioEnabled;
  audioBtn.textContent = audioEnabled ? "🔊" : "🔇";
  if (audioEnabled) {
    if (currentMusic) { currentMusic.pause(); currentMusic = null; }
    if (currentAmbience) { currentAmbience.pause(); currentAmbience = null; }
    currentMusicSrc = null;
    currentAmbienceSrc = null;
    const s = SCREENS[currentScreenId];
    updateMusic(s?.music || null, s?.volume ?? 0.6);
    updateAmbience(s?.ambience || null, s?.ambienceVolume ?? 0.6);
  } else {
    if (currentMusic) currentMusic.pause();
    if (currentAmbience) currentAmbience.pause();
  }
});

backBtn.addEventListener("click", () => {
  if (history.length < 2) return;
  history.pop();
  const prev = history.pop();
  render(prev);
});

function render(screenId) {
  const screen = SCREENS[screenId];
  if (!screen) {
    console.error("Unknown screen:", screenId);
    return;
  }

  currentScreenId = screenId;
  history.push(screenId);
  backBtn.style.display = history.length > 1 ? "inline-block" : "none";

  document.getElementById("game").classList.remove("fade-out");

  const srcs = screen.images || [screen.image];
  screenImgs.innerHTML = "";
  for (const src of srcs) {
    const el = document.createElement("img");
    el.src = src;
    screenImgs.appendChild(el);
  }

  title.textContent = screen.title || "";
  title.style.display = screen.title ? "block" : "none";

  text.textContent = screen.text || "";
  text.style.display = screen.text ? "block" : "none";

  updateMusic(screen.music || null, screen.volume ?? 0.6);
  updateAmbience(screen.ambience || null, screen.ambienceVolume ?? 0.6);

  if (audioEnabled && screen.sfx) {
    const sfx = new Audio(screen.sfx);
    sfx.volume = screen.sfxVolume ?? 0.6;
    sfx.play().catch(() => {});
  }

  choices.innerHTML = "";

  if (screen.choices.length === 0) {
    const btn = document.createElement("button");
    btn.textContent = "Play Again";
    btn.onclick = () => {
      history.length = 0;
      render("start");
    };
    choices.appendChild(btn);
    return;
  }

  for (const choice of screen.choices) {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      document.getElementById("game").classList.add("fade-out");
      setTimeout(() => render(choice.to), 200);
    };
    choices.appendChild(btn);
  }
}

render("start");
