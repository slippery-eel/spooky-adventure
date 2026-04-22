# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Game

No build step. Open `index.html` directly in a browser. Hosted on GitHub Pages at `https://slippery-eel.github.io/spooky-adventure/`.

## Architecture

Purely static, zero-dependency visual novel. Four files:

- **`screens.js`** — all game content. A single `SCREENS` object keyed by screen ID. Engine always starts at the `"start"` key.
- **`game.js`** — render engine. Reads the current screen, updates the DOM, wires up choice buttons, handles fade transitions, manages a history stack for the back button, and controls audio.
- **`index.html`** — shell. Elements: `#back-btn`, `#audio-btn`, `#screen-imgs`, `#screen-title`, `#screen-text`, `#choices`.
- **`style.css`** — styling. `image-rendering: pixelated` for pixel art. Responsive mobile layout at `max-width: 600px`.

## Screen Data Model

```js
{
  image: "art/filename.png",           // single image
  images: ["art/a.png", "art/b.png"],  // OR multiple images side-by-side
  title: "LARGE TITLE",                // optional — rendered as <h1> in bold monospace
  text: "Body text here.",             // optional — \n and \n\n respected (white-space: pre-wrap)
  music: "audio/track.wav",            // looping background music for this screen
  volume: 0.6,                         // optional music volume (0.0–1.0, default 0.6)
  ambience: "audio/birds.wav",          // optional second looping track (independent of music)
  ambienceVolume: 0.6,                 // optional ambience volume (0.0–1.0, default 0.6)
  sfx: "audio/sound.wav",              // optional one-shot sound on screen arrival
  sfxVolume: 0.6,                      // optional sfx volume (0.0–1.0, default 0.6)
  choices: [                           // empty array = ending screen (shows "Play Again")
    { text: "Button label", to: "target_screen_id" }
  ]
}
```

- Use `image` for a single image, `images` for a side-by-side multi-image layout
- `choices: []` triggers the ending state — "Play Again" resets to `"start"`
- Screen IDs are arbitrary snake_case strings
- Every screen should have an explicit `music` field. The engine compares current vs incoming track — same track keeps playing uninterrupted, different track switches

## Audio

- Audio is **off by default**. Top-right 🔇/🔊 button toggles it.
- Music tracks go in `audio/`. On track change the previous track stops and the new one loops.
- Muting pauses in place; unmuting evaluates the current screen's track fresh.
- `sfx` plays once on screen arrival (only when audio is enabled).

## Adding Screens

User describes screens in freeform prose. Convert to entries in `screens.js`. Mark undefined target IDs as `// not yet defined` comments. Use `start` as the entry point key.

## Navigation / Back Button

`game.js` maintains a `history` array. The back button (fixed top-left) pops the stack and re-renders the previous screen. Hidden on the first screen. Music updates correctly on back-navigation because each screen has an explicit `music` field.

## Layout Notes

- Single images: `width: auto; max-width: 100%` — hugs the image, no stretching
- Multi-image rows: equal-width flex items at fixed height (`min(480px, 55vh)`)
- Mobile (`≤600px`): multi-image rows stay side-by-side sharing screen width; single images use natural size; title font shrinks

## Art & Fonts

- Images go in `art/`
- Audio goes in `audio/`
- Font files go in `fonts/` — ITC Benguiat (`BenguiatITC.woff2/.woff`) and Perfect DOS VGA 437 (`Perfect DOS VGA 437.ttf`) are referenced but currently unused; title uses Courier New
