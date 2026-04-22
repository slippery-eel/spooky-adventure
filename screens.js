const SCREENS = {
  start: {
    image: "art/intro.png",
    title: "Leaky Churches",
    music: "audio/wind1.wav",
    choices: [
      { text: "Go Forth", to: "forest_start" },
    ]
  },

  forest_start: {
    images: ["art/trees1.png", "art/trees2.png", "art/trees3.png"],
    text: "You walk alone in a dark forest.",
    music: "audio/wind1.wav",
    choices: [
      { text: "Keep going", to: "bear_keeper" },
    ]
  },

  bear_keeper: {
    image: "art/bear.png",
    text: "A figure appears from the wood.\n\n\"Hello traveler. What are you doing here?\"",
    music: "audio/wind1.wav",
    sfx: "audio/step.wav",
    sfxVolume: 0.05,
    choices: [
      { text: "\"I got lost.\"", to: "placeholder1" },
      { text: "\"Just exploring.\"", to: "placeholder2" },
      { text: "\"Mind your business, bear.\"", to: "placeholder3" },
    ]
  },

  placeholder1: {
    image: "art/bear.png",
    text: "\"sucks 2 suck\"",
    music: "audio/wind1.wav",
    choices: []
  },

  placeholder2: {
    image: "art/bear.png",
    text: "\"nerd\"",
    music: "audio/wind1.wav",
    choices: [
      { text: "Move on.", to: "boi_in_tree" },
    ]
  },

  placeholder3: {
    image: "art/bear.png",
    text: "\"fine bich fuck u too\"",
    music: "audio/wind1.wav",
    choices: []
  },

  boi_in_tree: {
    image: "art/boi_in_tree.png",
    text: "\"My oh my it seems a tree has grown in me. Time moves quicker and quicker these days.\"",
    music: "audio/WindandOwl.wav",
    volume: 0.3,
    choices: [
      { text: "\"Ain't that the truth.\"", to: "boi_in_tree2" },
    ]
  },

  boi_in_tree2: {
    image: "art/boi_in_tree.png",
    text: "\"Can you do something for me?\"",
    music: "audio/WindandOwl.wav",
    volume: 0.3,
    choices: []
  },
};
