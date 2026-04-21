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
    image: "art/bear.png",
    text: "A figure appears from the wood.\n\n\"Hello traveler. What are you doing here?\"",
    choices: [
      { text: "\"I got lost.\"", to: "placeholder1" },
      { text: "\"Just exploring.\"", to: "placeholder2" },
      { text: "\"Mind your business, bear.\"", to: "placeholder3" },
    ]
  },

  // placeholder1 — not yet defined
  placeholder1: {
    image: "art/bear.png",
    text: "\"sucks 2 suck\"",
    choices: [
    ]
  },
  // placeholder2 — not yet defined
  placeholder2: {
    image: "art/bear.png",
    text: "\"nerd\"",
    choices: [
      { text: "Move on.", to: "boi_in_tree" },
    ]
  },
  // placeholder3 — not yet defined
  placeholder3: {
    image: "art/bear.png",
    text: "\"fine bich fuck u too\"",
    choices: [
      
    ]
  },

  boi_in_tree: {
    image: "art/boi_in_tree.png",
    text: "\"My oh my it seems a tree has grown in me. Time moves quicker and quicker these days.\"",
    choices: [
      { text: "\"Ain't that the truth.\"", to: "boi_in_tree2" },
    ]
  },

  boi_in_tree2: {
    image: "art/boi_in_tree.png",
    text: "\"Can you do something for me?\"",
    choices: [
    ]
  },
};



