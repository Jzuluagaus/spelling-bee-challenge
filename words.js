/* Spelling Bee Challenge vocabulary bank.
 * Add unit word lists here only — the game engine reads WORD_BANK and does not hardcode unit content.
 */
const WORD_BANK = {
  unit1: [],
  unit2: [],
  unit3: [],
  unit4: [
    {
      word: "classmates",
      wrong: ["classmats", "clasmmates", "classmatess"],
      definition: "People who are in the same class at school.",
      sentence: "I work with my _____ during class."
    },
    {
      word: "classroom",
      wrong: ["clasroom", "classrom", "classrroom"],
      definition: "A room at school where students learn.",
      sentence: "Our _____ has desks and a whiteboard."
    },
    {
      word: "country",
      wrong: ["contry", "countrey", "countri"],
      definition: "A nation with its own land and government.",
      sentence: "Mexico is a _____."
    },
    {
      word: "town",
      wrong: ["toun", "towm", "tawn"],
      definition: "A place where people live, usually smaller than a city.",
      sentence: "They live in a small _____."
    },
    {
      word: "recess",
      wrong: ["reces", "reccess", "resess"],
      definition: "A break during the school day.",
      sentence: "We play outside during _____."
    },
    {
      word: "playground",
      wrong: ["playgrond", "plaiground", "playgroun"],
      definition: "A place where children can play.",
      sentence: "The swings are on the _____."
    },
    {
      word: "family",
      wrong: ["famly", "familey", "familly"],
      definition: "People who are related to each other.",
      sentence: "My _____ eats dinner together."
    },
    {
      word: "teacher",
      wrong: ["techer", "teachar", "teecher"],
      definition: "A person who helps students learn.",
      sentence: "Our _____ explained the lesson."
    },
    {
      word: "song",
      wrong: ["sung", "sogn", "songg"],
      definition: "A piece of music with words that are sung.",
      sentence: "We learned a new _____ in music class."
    },
    {
      word: "parade",
      wrong: ["parad", "paraide", "parrade"],
      definition: "A public celebration that moves along a route.",
      sentence: "We watched the _____ downtown."
    },
    {
      word: "forest",
      wrong: ["forrest", "forst", "foreste"],
      definition: "A large area covered with trees.",
      sentence: "Many animals live in the _____."
    },
    {
      word: "plant",
      wrong: ["plent", "plannt", "plante"],
      definition: "A living thing that often has roots and leaves.",
      sentence: "The _____ needs water and sunlight."
    },
    {
      word: "deer",
      wrong: ["dere", "deeer", "dear"],
      definition: "A wild animal with long legs; males often have antlers.",
      sentence: "A _____ walked between the trees."
    },
    {
      word: "squirrel",
      wrong: ["squirel", "squirrell", "squerrel"],
      definition: "A small animal with a bushy tail that often climbs trees.",
      sentence: "The _____ climbed the tree."
    },
    {
      word: "rabbit",
      wrong: ["rabit", "rabbitt", "rabbet"],
      definition: "A small animal with long ears and strong back legs.",
      sentence: "The _____ hopped across the grass."
    },
    {
      word: "bear",
      wrong: ["bare", "beer", "bair"],
      definition: "A large strong animal with thick fur.",
      sentence: "The _____ walked through the forest."
    },
    {
      word: "city",
      wrong: ["citty", "sity", "citey"],
      definition: "A large place where many people live and work.",
      sentence: "The _____ has many tall buildings."
    },
    {
      word: "village",
      wrong: ["vilage", "villige", "villiage"],
      definition: "A small community, usually smaller than a town.",
      sentence: "They visited a quiet _____."
    },
    {
      word: "subway",
      wrong: ["subwey", "subwai", "subbway"],
      definition: "A train system that often runs beneath a city.",
      sentence: "We took the _____ downtown."
    },
    {
      word: "geography",
      wrong: ["geografy", "geograpy", "geoghraphy"],
      definition: "The study of places, countries, land, and the Earth.",
      sentence: "We learn about countries and maps in _____."
    }
  ],
  unit5: [],
  unit6: [],
  unit7: [],
  unit8: [],
  unit9: []
};

function getUnitWordList(unitKey) {
  if (unitKey === "mixed") {
    return Object.keys(WORD_BANK)
      .filter((k) => k.startsWith("unit"))
      .flatMap((k) => WORD_BANK[k] || []);
  }
  return (WORD_BANK[unitKey] || []).slice();
}

function getPlayableUnits() {
  return Object.keys(WORD_BANK).filter((k) => (WORD_BANK[k] || []).length > 0);
}

function isUnitPlayable(unitKey) {
  if (unitKey === "mixed") {
    return getPlayableUnits().length >= 2;
  }
  return getUnitWordList(unitKey).length > 0;
}
