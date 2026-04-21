# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Game

No build step. Open `index.html` directly in a browser. Hosted on GitHub Pages at `https://slippery-eel.github.io/spooky-adventure/`.

## Architecture

Purely static, zero-dependency visual novel. Four files:

- **`screens.js`** — all game content. A single `SCREENS` object keyed by screen ID. Engine always starts at the `"start"` key.
- **`game.js`** — render engine. Reads the current screen, updates the DOM, wires up choice buttons, handles fade transitions, and manages a history stack for the back button.
- **`index.html`** — shell. Elements: `#back-btn`, `#screen-imgs`, `#screen-title`, `#screen-text`, `#choices`.
- **`style.css`** — styling. `image-rendering: pixelated` for pixel art. Responsive mobile layout at `max-width: 600px`.

## Screen Data Model

```js
{
  image: "art/filename.png",      // single image
  images: ["art/a.png", "art/b.png"],  // OR multiple images side-by-side
  title: "LARGE TITLE",           // optional — rendered as <h1> in bold monospace
  text: "Body text here.",        // optional — \n and \n\n respected (white-space: pre-wrap)
  choices: [                      // empty array = ending screen (shows "Play Again")
    { text: "Button label", to: "target_screen_id" }
  ]
}
```

- Use `image` for a single image, `images` for a side-by-side multi-image layout
- `choices: []` triggers the ending state — "Play Again" resets to `"start"`
- Screen IDs are arbitrary snake_case strings

## Adding Screens

User describes screens in freeform prose. Convert to entries in `screens.js`. Mark undefined target IDs as `// not yet defined` comments. Use `start` as the entry point key.

## Navigation / Back Button

`game.js` maintains a `history` array. The back button (fixed top-left) pops the stack and re-renders the previous screen. Hidden on the first screen.

## Layout Notes

- Single images: `width: auto; max-width: 100%` — hugs the image, no stretching
- Multi-image rows: equal-width flex items at fixed height (`min(480px, 55vh)`)
- Mobile (`≤600px`): multi-image rows stay side-by-side sharing screen width; single images use natural size; title font shrinks

## Art & Fonts

- Images go in `art/`
- Font files go in `fonts/` — ITC Benguiat (`BenguiatITC.woff2/.woff`) and Perfect DOS VGA 437 (`Perfect DOS VGA 437.ttf`) are referenced but currently unused; title uses Courier New
