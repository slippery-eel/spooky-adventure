const SCREENS = {
  start: {
    image: "art/intro.png",
    title: "Leaky Churches",
    choices: [
      { text: "Go Forth", to: "forest_start" },
    ]
  },

  forest_start: {
    images: ["art/trees1.png", "art/trees2.png", "art/trees3.png"],
    text: "You walk alone in a dark forest.",
    choices: [
      { text: "Keep going", to: "bear_keeper" },
    ]
  },

  bear_keeper: {
    image: "art/bear.jpg",
    text: "A figure appears from the dark wood.\n\n\"Hello traveler. What are you doing here?\"",
    choices: [
      { text: "I got lost.", to: "placeholder1" },
      { text: "Just exploring.", to: "placeholder2" },
      { text: "Mind your business, bear.", to: "placeholder3" },
    ]
  },

  // placeholder1 — not yet defined
  // placeholder2 — not yet defined
  // placeholder3 — not yet defined
};
