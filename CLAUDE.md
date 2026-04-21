# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Game

No build step. Open `index.html` directly in a browser.

## Architecture

This is a purely static, zero-dependency choose-your-own-adventure game. There are four files:

- **`screens.js`** — all game content. A single `SCREENS` object keyed by screen ID. The engine always starts at the `"start"` key.
- **`game.js`** — the render engine. Reads the current screen from `SCREENS`, updates the DOM, and wires up choice buttons. Handles fade transitions and the "Play Again" restart.
- **`index.html`** — the shell. Three elements: `#screen-img`, `#screen-title`, `#screen-text`, `#choices`.
- **`style.css`** — styling. Uses `image-rendering: pixelated` for pixel art. ITC Benguiat font loaded via `@font-face` from `fonts/`.

## Screen Data Model

```js
{
  image: "art/filename.jpg",   // required
  title: "LARGE TITLE",        // optional — rendered in ITC Benguiat as <h1>
  text: "Body text here.",     // optional — supports \n for line breaks
  choices: [                   // empty array = ending screen (shows "Play Again")
    { text: "Button label", to: "target_screen_id" }
  ]
}
```

## Adding Screens

The user describes screens in freeform prose. Convert them to entries in `screens.js`. Mark undefined target IDs as `// placeholder — not yet defined` comments. Use `start` as the entry point key (currently maps to the intro screen).

## Art

Drop images into `art/`. Drop font files into `fonts/` (expects `BenguiatITC.woff2` / `.woff`).
