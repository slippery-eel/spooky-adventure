const SCREENS = {
  start: {
    image: "art/intro.png",
    title: "Leaky Churches",
    ambience: "audio/wind_1.wav",
    ambienceVolume: 0.8,
    choices: [
      { text: "Go Forth", to: "forest_start", enableAudio: true },
    ]
  },

  forest_start: {
    images: ["art/trees1.png", "art/trees2.png", "art/trees3.png"],
    text: "You walk alone in a dark forest.",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_unlock.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Keep going", to: "bear_keeper" },
    ]
  },

  bear_keeper: {
    image: "art/bear.png",
    text: "A figure appears from the wood.\n\n\"Hello traveler. What are you doing here?\"",
    ambience: "audio/wind_1.wav",
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
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_funny.wav",
    sfxVolume: 0.1,
    choices: [
      { text: "Move on.", to: "boi_in_ground" },
    ]
  },

  placeholder2: {
    image: "art/bear.png",
    text: "\"nerd\"",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_bad_1.wav",
    sfxVolume: 0.2,
    choices: [
      { text: "Move on.", to: "boi_in_tree" },
    ]
  },

  placeholder3: {
    image: "art/bear.png",
    text: "\"fine bich fuck u too\"",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_bad_2.wav",
    sfxVolume: 0.2,
    choices: []
  },

  boi_in_tree: {
    image: "art/boi_in_tree.png",
    text: "\"My oh my it seems a tree has grown in me. Time moves quicker and quicker these days.\"",
    ambience: "audio/wind_and_owl.wav",
    ambienceVolume: 0.2,
    choices: [
      { text: "\"Ain't that the truth.\"", to: "boi_in_tree2" },
    ]
  },

  boi_in_tree2: {
    image: "art/boi_in_tree.png",
    text: "\"Can you do something for me?\"",
    music: "audio/ominous_beat.wav",
    volume: 0.8,
    ambience: "audio/wind_and_owl.wav",
    ambienceVolume: 0.15,
    sfx: "audio/whoosh_1.wav",
    sfxVolume: 0.15,
    choices: []
  },

  boi_in_ground: {
    image: "art/boi_in_ground.png",
    text: "\"Hello my good sir. Lovely morning isn't it?\"",
    ambience: "audio/summer_ambience.wav",
    ambienceVolume: 0.2,
    sfx: "audio/sting_weird.wav",
    sfxVolume: 0.02,
    choices: [
      { text: "\"Yes.\"", to: "eyes_of_god" },
    ]
  },

  eyes_of_god: {
    image: "art/eyes_of_god.png",
    text: "You look up. The sky opens and the eyes of God star down at you.",
    ambience: "audio/summer_ambience.wav",
    ambienceVolume: 0.2,
    sfx: "audio/sting_good.wav",
    sfxVolume: 0.01,
    choices: [
      { text: "\"Creepy.\"", to: "boi_in_tree" },
    ]
  },
};
