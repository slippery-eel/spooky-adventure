const screenImgs = document.getElementById("screen-imgs");
const title = document.getElementById("screen-title");
const text = document.getElementById("screen-text");
const choices = document.getElementById("choices");
const backBtn = document.getElementById("back-btn");

const history = [];

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
