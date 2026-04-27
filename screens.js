const SCREENS = {
  start: {
    image: "art/intro.png",
    title: "Leaky Churches",
    ambience: "audio/wind_1.wav",
    ambienceVolume: 0.8,
    choices: [
      { text: "Go Forth", to: "character_select", enableAudio: true },
    ]
  },

//CHARACTER SELECTS
  character_select: {
    images: ["art/fishboi.png", "art/hooded.png", "art/candace.jpg"],
    text: "Who are you?",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_unlock.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Fish Boi", to: "character_1" },
      { text: "The Shrouded Lord", to: "character_2" },
      { text: "Jessica", to: "character_3" },
      { text: "Random", random: ["character_1", "character_2", "character_3"] },
    ]
  },

  character_1: {
    images: ["art/fishboi.png"],
    text: "Unt il'Nil is a former warrior of the squisher cult, cast out for heresy. His mission is to find the great power and restore his God to its former glory and reclaim his place in the cult.",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_unlock_2.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Accept my fate.", to: "dungeon_start" },
      { text: "Go back.", to: "character_select" },
    ]
  },

  character_2: {
    images: ["art/hooded.png"],
    text: "Damn boi u spooky. TBD.",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_unlock_2.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Accept my fate.", to: "dungeon_start" },
      { text: "Go back.", to: "character_select" },
    ]
  },

  character_3: {
    images: ["art/candace.jpg"],
    text: "Okay baddie.",
    ambience: "audio/wind_1.wav",
    sfx: "audio/bwomp_unlock_2.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Accept my fate.", to: "dungeon_start" },
      { text: "Go back.", to: "character_select" },
    ]
  },

  //DUNGEON SEQUENCE
  dungeon_start: {
    image: "art/dungeon_door.png",
    text: "You awake in a dungeon.",
    ambience: "audio/dripping_ambience.m4a",
    ambienceVolume: 1,
    music: "audio/ominous_drone.wav",
    sfx: "audio/bwomp_bad_2.wav",
    sfxVolume: 0.25,
    choices: [
      { text: "Go back to sleep.", to: "dungeon_start" },
      { text: "Look around.", to: "dungeon_reverse" },
      { text: "Look through the keyhole.", to: "keyhole" },
    ]
  },

  dungeon_reverse: {
    image: "art/dungeon_reverse.png",
    text: "Not much to see here.",
    ambience: "audio/dripping_ambience.m4a",
    ambienceVolume: 1,
    music: "audio/ominous_drone.wav",
    choices: [
      { text: "Look back.", to: "dungeon_start" },
    ]
  },

  keyhole: {
    image: ["art/silhouette.png"],
    text: "You see figures moving in the candlelight with hushed, hurried voices. Something is happening.",
    ambience: "audio/dripping_ambience.m4a",
    ambienceVolume: 1,
    music: "audio/ominous_drone.wav",    
    choices: [
      { text: "Go back.", to: "dungeon_hole" },
    ]
  },

  dungeon_hole: {
    image: ["art/dungeon_hole.png"],
    text: "There is an explosion. A hole leads out.",
    ambience: "audio/dripping_ambience.m4a",
    ambienceVolume: 1,
    music: "audio/ominous_drone.wav",
    sfx: "audio/dungeon_explosion.wav",
    sfxVolume: 0.1,
    choices: [
      { text: "Look closer.", to: "dungeon_hole_close" },
    ]
  },

  dungeon_hole_close: {
    image: ["art/dungeon_hole_close.png"],
    text: "\"Huh, how did that happen?\"",
    ambience: "audio/dripping_ambience.m4a",
    ambienceVolume: 1,
    music: "audio/ominous_drone.wav",
    choices: [
      { text: "Leave.", to: "forest_start" },
    ]
  },
  
  //FOREST SEQUENCE  
  forest_start: {
    images: ["art/trees1.png", "art/trees2.png", "art/trees3.png"],
    text: "You walk alone in a dark forest.",
    ambience: "audio/wind_1.wav",
    choices: [
      { text: "Keep going.", to: "bear_keeper" },
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
    ambienceVolume: 0.1,
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
    ambienceVolume: 0.1,
    sfx: "audio/sting_good.wav",
    sfxVolume: 0.01,
    choices: [
    ]
  },
};
