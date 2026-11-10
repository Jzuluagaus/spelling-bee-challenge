/* Spelling Bee Challenge vocabulary bank.
 * Units 1.1–4.3 from the school Vocabulary / Spelling lists.
 * Add or edit unit arrays here only — the game engine reads WORD_BANK.
 */
const UNIT_ORDER = [
  "unit1_1",
  "unit1_2",
  "unit1_3",
  "unit2_1",
  "unit2_2",
  "unit2_3",
  "unit3_1",
  "unit3_2",
  "unit3_3",
  "unit4_1",
  "unit4_2",
  "unit4_3",
];

const UNIT_LABELS = {
  "unit1_1": "Unit 1.1",
  "unit1_2": "Unit 1.2",
  "unit1_3": "Unit 1.3",
  "unit2_1": "Unit 2.1",
  "unit2_2": "Unit 2.2",
  "unit2_3": "Unit 2.3",
  "unit3_1": "Unit 3.1",
  "unit3_2": "Unit 3.2",
  "unit3_3": "Unit 3.3",
  "unit4_1": "Unit 4.1",
  "unit4_2": "Unit 4.2",
  "unit4_3": "Unit 4.3",
};

const WORD_BANK = {
  unit1_1: [
    {
      word: "grandparents",
      wrong: ["grandparrents", "grandperents", "granparents"],
      definition: "Your mother's or father's parents.",
      sentence: "My _____ visit us on Sundays."
    },
    {
      word: "grandson",
      wrong: ["granson", "grandsun", "grandsone"],
      definition: "A boy who is the child of your son or daughter.",
      sentence: "Their _____ loves to play soccer."
    },
    {
      word: "granddaughter",
      wrong: ["grandauter", "granddaugter", "granddauhter"],
      definition: "A girl who is the child of your son or daughter.",
      sentence: "Their _____ drew them a picture."
    },
    {
      word: "cook a meal",
      wrong: ["cok a meal", "cook a mele", "cook a meel"],
      definition: "To make food ready to eat.",
      sentence: "Grandma will _____ for the family."
    },
    {
      word: "tell a story",
      wrong: ["tel a story", "tell a storey", "tell a storry"],
      definition: "To say what happened in a book or tale.",
      sentence: "Please _____ about the dragon."
    },
    {
      word: "take a walk",
      wrong: ["tak a walk", "take a wok", "take a walke"],
      definition: "To go outside and walk for a while.",
      sentence: "We _____ in the park after lunch."
    },
    {
      word: "do chores",
      wrong: ["do chors", "do choars", "do choores"],
      definition: "To do jobs that help at home.",
      sentence: "I _____ before I play."
    },
    {
      word: "treats",
      wrong: ["treets", "treates", "treaats"],
      definition: "Special snacks or sweets you enjoy.",
      sentence: "Grandpa brought us candy _____."
    },
    {
      word: "watering can",
      wrong: ["waterng can", "watering cann", "waterin can"],
      definition: "A container used to pour water on plants.",
      sentence: "Fill the _____ and water the flowers."
    },
    {
      word: "card",
      wrong: ["kard", "carrd", "cade"],
      definition: "A folded paper with a message for someone.",
      sentence: "I made a birthday _____ for Mom."
    },
  ],
  unit1_2: [
    {
      word: "bake cookies",
      wrong: ["bake cookys", "bak cookies", "bake cookeis"],
      definition: "To cook sweet biscuits in the oven.",
      sentence: "We _____ together on Saturday."
    },
    {
      word: "watch cartoons",
      wrong: ["wach cartoons", "watch cartunes", "watch cartons"],
      definition: "To look at funny animated shows.",
      sentence: "I _____ after breakfast."
    },
    {
      word: "do puzzles",
      wrong: ["do puzles", "do puzzels", "do puzzelz"],
      definition: "To fit pieces together to make a picture.",
      sentence: "We _____ on the living room floor."
    },
    {
      word: "do karate",
      wrong: ["do karatee", "do karati", "do carate"],
      definition: "To practice a sport with kicks and punches.",
      sentence: "He likes to _____ after school."
    },
    {
      word: "forget",
      wrong: ["forgat", "forgget", "foget"],
      definition: "To not remember something.",
      sentence: "Don't _____ your lunchbox."
    },
    {
      word: "alone",
      wrong: ["allone", "alon", "aloan"],
      definition: "By yourself, with no one else.",
      sentence: "She sat _____ on the bench."
    },
  ],
  unit1_3: [
    {
      word: "lamb",
      wrong: ["lam", "lamm", "lambb"],
      definition: "A baby sheep.",
      sentence: "The soft _____ followed its mother."
    },
    {
      word: "bark",
      wrong: ["barck", "berk", "barrk"],
      definition: "The sound a dog makes.",
      sentence: "I heard the dog _____ at night."
    },
    {
      word: "chase",
      wrong: ["chace", "chasse", "chaise"],
      definition: "To run after someone or something.",
      sentence: "The puppy likes to _____ the ball."
    },
    {
      word: "run away",
      wrong: ["run awey", "runn away", "run awway"],
      definition: "To leave quickly because you are scared.",
      sentence: "The rabbit will _____ from the fox."
    },
    {
      word: "feed",
      wrong: ["fede", "fead", "fedd"],
      definition: "To give food to a person or animal.",
      sentence: "We _____ the sheep every morning."
    },
    {
      word: "get dark",
      wrong: ["get darck", "gett dark", "get dirk"],
      definition: "When the sky turns from light to night.",
      sentence: "We go home when it starts to _____."
    },
    {
      word: "sheepdog",
      wrong: ["shepdog", "sheep dogg", "sheapdog"],
      definition: "A dog that helps take care of sheep.",
      sentence: "The _____ watched the flock."
    },
    {
      word: "alone",
      wrong: ["allone", "alon", "aloan"],
      definition: "By yourself, with no one else.",
      sentence: "The lamb felt _____ in the field."
    },
    {
      word: "lonely",
      wrong: ["lonley", "lonly", "loneley"],
      definition: "Sad because you are by yourself.",
      sentence: "He felt _____ without his friends."
    },
    {
      word: "brave",
      wrong: ["brav", "braive", "brabe"],
      definition: "Not afraid when something is hard or scary.",
      sentence: "The _____ dog protected the sheep."
    },
    {
      word: "danger",
      wrong: ["daynger", "dangr", "dangger"],
      definition: "Something that can hurt you.",
      sentence: "Stay away from _____ near the road."
    },
    {
      word: "protect",
      wrong: ["protekt", "protact", "prottect"],
      definition: "To keep someone or something safe.",
      sentence: "Dogs _____ the farm at night."
    },
  ],
  unit2_1: [
    {
      word: "first",
      wrong: ["ferst", "frist", "furst"],
      definition: "Before everything else; number one.",
      sentence: "She finished _____ in the race."
    },
    {
      word: "second",
      wrong: ["seccond", "secend", "seckond"],
      definition: "The one after first; number two.",
      sentence: "I came in _____ place."
    },
    {
      word: "spelling bee",
      wrong: ["speling bee", "spelling be", "spellin bee"],
      definition: "A contest where you spell words out loud.",
      sentence: "Our class won the _____."
    },
    {
      word: "project",
      wrong: ["projekt", "proect", "projecct"],
      definition: "A special piece of school work.",
      sentence: "We made a science _____ about frogs."
    },
    {
      word: "contest",
      wrong: ["contast", "conntest", "contesst"],
      definition: "A game or race to find a winner.",
      sentence: "There is an art _____ at school."
    },
    {
      word: "habitat",
      wrong: ["habbitat", "habitatt", "habutat"],
      definition: "The place where an animal lives in nature.",
      sentence: "A pond is a frog's _____."
    },
    {
      word: "pair",
      wrong: ["pare", "peir", "paire"],
      definition: "Two things that go together.",
      sentence: "I need a _____ of socks."
    },
    {
      word: "unhappy",
      wrong: ["unhapy", "unhappey", "unhapyp"],
      definition: "Sad or not feeling good.",
      sentence: "She was _____ when she lost her toy."
    },
    {
      word: "jellyfish",
      wrong: ["jellyfih", "jelisfish", "jelly fishh"],
      definition: "A soft sea animal that can sting.",
      sentence: "We saw a _____ at the beach."
    },
    {
      word: "glue",
      wrong: ["glu", "gluee", "gluw"],
      definition: "A sticky liquid used to stick things together.",
      sentence: "Use _____ to fix the paper."
    },
  ],
  unit2_2: [
    {
      word: "afraid",
      wrong: ["afriad", "affraid", "afraide"],
      definition: "Feeling scared of something.",
      sentence: "I am _____ of the dark."
    },
    {
      word: "hole",
      wrong: ["holl", "hoal", "holee"],
      definition: "An empty space in the ground or in something.",
      sentence: "The rabbit dug a _____."
    },
    {
      word: "dig",
      wrong: ["digg", "dic", "diig"],
      definition: "To make a hole in the ground.",
      sentence: "Dogs like to _____ in the sand."
    },
    {
      word: "take care of",
      wrong: ["take car of", "tak care of", "take care off"],
      definition: "To look after someone or something.",
      sentence: "We _____ our class pet."
    },
    {
      word: "store",
      wrong: ["stoar", "stor", "storr"],
      definition: "A place where you buy things.",
      sentence: "We went to the _____ for milk."
    },
    {
      word: "buy",
      wrong: ["byuy", "buye", "bui"],
      definition: "To give money to get something.",
      sentence: "I want to _____ a new book."
    },
  ],
  unit2_3: [
    {
      word: "cherry",
      wrong: ["chery", "cherri", "cheery"],
      definition: "A small red fruit with a pit.",
      sentence: "I ate a sweet _____."
    },
    {
      word: "chopsticks",
      wrong: ["chopstiks", "chop sticks", "chopstickes"],
      definition: "Two thin sticks used to eat food.",
      sentence: "She learned to eat with _____."
    },
    {
      word: "excited",
      wrong: ["exited", "excitted", "exsitied"],
      definition: "Very happy and full of energy.",
      sentence: "We felt _____ about the party."
    },
    {
      word: "invite",
      wrong: ["invight", "invitte", "envite"],
      definition: "To ask someone to come to an event.",
      sentence: "Please _____ your friends to lunch."
    },
    {
      word: "ask",
      wrong: ["aski", "assk", "asc"],
      definition: "To say a question to someone.",
      sentence: "You can _____ the teacher for help."
    },
    {
      word: "celebration",
      wrong: ["celeberation", "celebrasion", "celibration"],
      definition: "A happy party for a special day.",
      sentence: "The birthday _____ was loud and fun."
    },
  ],
  unit3_1: [
    {
      word: "tracks",
      wrong: ["traks", "trackes", "traccks"],
      definition: "Marks left by feet or wheels.",
      sentence: "We followed the animal _____ in the mud."
    },
    {
      word: "cub",
      wrong: ["cubb", "kub", "cubbe"],
      definition: "A baby bear, lion, or similar animal.",
      sentence: "The bear _____ stayed close to its mom."
    },
    {
      word: "dangerous",
      wrong: ["dangerus", "dangrous", "dangerouse"],
      definition: "Able to hurt you; not safe.",
      sentence: "Crossing the road alone can be _____."
    },
    {
      word: "cattle",
      wrong: ["catel", "cattel", "catle"],
      definition: "Cows and bulls raised on a farm.",
      sentence: "The _____ ate grass in the field."
    },
    {
      word: "helpful",
      wrong: ["helpfull", "helpfuli", "halpful"],
      definition: "Ready to help other people.",
      sentence: "The _____ guide showed us the path."
    },
    {
      word: "cross",
      wrong: ["cros", "crosse", "kross"],
      definition: "To go from one side to the other.",
      sentence: "We _____ the bridge carefully."
    },
    {
      word: "fence",
      wrong: ["fense", "fance", "fenc"],
      definition: "A wall of wood or wire around a place.",
      sentence: "The horses stay behind the _____."
    },
    {
      word: "tourist",
      wrong: ["tourst", "tourrist", "tourriste"],
      definition: "A person who visits a place for fun.",
      sentence: "The _____ took photos of the mountain."
    },
    {
      word: "hundred thousand",
      wrong: ["hundrid thousand", "hundred thosand", "hundred thousend"],
      definition: "The number 100,000.",
      sentence: "About a _____ birds fly south."
    },
    {
      word: "surprise",
      wrong: ["suprise", "surprize", "surprisse"],
      definition: "Something you did not expect.",
      sentence: "The party was a big _____."
    },
  ],
  unit3_2: [
    {
      word: "teeth",
      wrong: ["teath", "teth", "teeths"],
      definition: "The hard white parts in your mouth used to chew.",
      sentence: "Brush your _____ every day."
    },
    {
      word: "ostrich",
      wrong: ["ostrichh", "ostritch", "ostriche"],
      definition: "A very large bird that cannot fly.",
      sentence: "An _____ runs very fast."
    },
    {
      word: "pollen",
      wrong: ["polen", "pollin", "pollan"],
      definition: "Yellow powder from flowers that bees carry.",
      sentence: "Bees collect _____ from flowers."
    },
    {
      word: "skin",
      wrong: ["skinn", "scin", "skine"],
      definition: "The outer covering of your body.",
      sentence: "Wash the _____ on your hands."
    },
    {
      word: "sloth",
      wrong: ["slothe", "slothh", "sloath"],
      definition: "A slow animal that lives in trees.",
      sentence: "The _____ hangs upside down."
    },
    {
      word: "algae",
      wrong: ["alga", "algee", "algea"],
      definition: "Tiny green plants that live in water.",
      sentence: "Green _____ grew on the pond."
    },
    {
      word: "nectar",
      wrong: ["necter", "nektar", "nectarr"],
      definition: "Sweet liquid inside flowers.",
      sentence: "Butterflies drink _____ from blooms."
    },
    {
      word: "provide",
      wrong: ["provied", "provvide", "pruvide"],
      definition: "To give something that is needed.",
      sentence: "Trees _____ shade on hot days."
    },
    {
      word: "follow",
      wrong: ["folow", "fallow", "follw"],
      definition: "To go after someone or something.",
      sentence: "Please _____ the trail markers."
    },
    {
      word: "healthy",
      wrong: ["helthy", "healthty", "healhty"],
      definition: "Feeling well and strong.",
      sentence: "Eating fruit keeps you _____."
    },
  ],
  unit3_3: [
    {
      word: "smoke",
      wrong: ["smok", "smoak", "smocke"],
      definition: "Gray gas that rises from a fire.",
      sentence: "_____ came out of the chimney."
    },
    {
      word: "air",
      wrong: ["aire", "aer", "airr"],
      definition: "What we breathe all around us.",
      sentence: "Fresh _____ feels good outside."
    },
    {
      word: "breathe",
      wrong: ["breath", "brethe", "breethe"],
      definition: "To take air in and out of your lungs.",
      sentence: "Swim up so you can _____."
    },
    {
      word: "sunlight",
      wrong: ["sunlite", "sunligt", "sunllight"],
      definition: "Light that comes from the sun.",
      sentence: "Plants need _____ to grow."
    },
    {
      word: "pollution",
      wrong: ["polution", "pollushion", "pollutin"],
      definition: "Dirty things that harm air, water, or land.",
      sentence: "Cars can cause air _____."
    },
    {
      word: "factory",
      wrong: ["factery", "faktory", "factroy"],
      definition: "A building where people make things.",
      sentence: "The toy _____ is near the river."
    },
    {
      word: "take care of",
      wrong: ["take car of", "tak care of", "take care off"],
      definition: "To look after someone or something.",
      sentence: "We must _____ our planet."
    },
    {
      word: "cut down",
      wrong: ["cutt down", "cut donw", "cut downn"],
      definition: "To make a tree fall by cutting it.",
      sentence: "People should not _____ too many trees."
    },
    {
      word: "dirty",
      wrong: ["dirtty", "dirtey", "derty"],
      definition: "Not clean.",
      sentence: "My shoes got _____ in the mud."
    },
  ],
  unit4_1: [
    {
      word: "guess",
      wrong: ["gues", "ges", "guress"],
      definition: "To try to give an answer without being sure.",
      sentence: "Can you _____ what is in the box?"
    },
    {
      word: "round",
      wrong: ["rownd", "raund", "rond"],
      definition: "Shaped like a circle or ball.",
      sentence: "A ball is _____."
    },
    {
      word: "hard",
      wrong: ["harde", "harrd", "hord"],
      definition: "Not soft; firm to the touch.",
      sentence: "The desk feels _____."
    },
    {
      word: "magazine",
      wrong: ["magasine", "magazin", "magizine"],
      definition: "A thin book with pictures and stories.",
      sentence: "I read a sports _____."
    },
    {
      word: "flat",
      wrong: ["flatt", "flate", "flot"],
      definition: "Smooth and even, not bumpy.",
      sentence: "The table top is _____."
    },
    {
      word: "drawers",
      wrong: ["drawerss", "dravers", "droers"],
      definition: "Boxes that slide in and out of furniture.",
      sentence: "Socks are in the top _____."
    },
    {
      word: "cake",
      wrong: ["cak", "caik", "cakke"],
      definition: "A sweet baked dessert for parties.",
      sentence: "We ate chocolate _____."
    },
    {
      word: "sweet",
      wrong: ["sweat", "swet", "sweete"],
      definition: "Tasting like sugar; not sour.",
      sentence: "The candy is very _____."
    },
    {
      word: "bounce",
      wrong: ["bouns", "bounse", "bouce"],
      definition: "To spring back up after hitting something.",
      sentence: "Watch the ball _____."
    },
    {
      word: "sour",
      wrong: ["soure", "sowr", "sorr"],
      definition: "A sharp taste like a lemon.",
      sentence: "Lemons taste _____."
    },
  ],
  unit4_2: [
    {
      word: "mammals",
      wrong: ["mamals", "mammels", "mammmals"],
      definition: "Animals that have hair or fur and drink milk.",
      sentence: "Dogs and cats are _____."
    },
    {
      word: "birds",
      wrong: ["birdds", "berds", "brids"],
      definition: "Animals with feathers and wings.",
      sentence: "_____ build nests in trees."
    },
    {
      word: "scales",
      wrong: ["scals", "skales", "scalees"],
      definition: "Thin hard plates on fish or snakes.",
      sentence: "Fish have shiny _____."
    },
    {
      word: "gills",
      wrong: ["gils", "gillls", "ghills"],
      definition: "Body parts fish use to breathe in water.",
      sentence: "Fish take in water through their _____."
    },
    {
      word: "fins",
      wrong: ["finn", "finns", "phins"],
      definition: "Flat body parts that help fish swim.",
      sentence: "The fish waved its _____."
    },
    {
      word: "beak",
      wrong: ["beek", "beack", "beakk"],
      definition: "The hard mouth of a bird.",
      sentence: "The parrot has a curved _____."
    },
    {
      word: "divided",
      wrong: ["dividded", "divied", "devided"],
      definition: "Split into parts.",
      sentence: "The class was _____ into two teams."
    },
    {
      word: "wings",
      wrong: ["winggs", "whings", "wengs"],
      definition: "Body parts birds use to fly.",
      sentence: "Butterflies have colorful _____."
    },
    {
      word: "feathers",
      wrong: ["fethers", "feathrs", "feathres"],
      definition: "Soft coverings on a bird's body.",
      sentence: "The pillow is filled with _____."
    },
    {
      word: "breathe",
      wrong: ["breath", "brethe", "breethe"],
      definition: "To take air in and out of your lungs.",
      sentence: "Whales come up to _____."
    },
    {
      word: "fur",
      wrong: ["furr", "fer", "fuhr"],
      definition: "Soft hair that covers some animals.",
      sentence: "The kitten has soft _____."
    },
  ],
  unit4_3: [
    {
      word: "hill",
      wrong: ["hil", "hilll", "hile"],
      definition: "A small high place of land.",
      sentence: "We climbed the _____."
    },
    {
      word: "river",
      wrong: ["rivver", "rivar", "rivre"],
      definition: "A large stream of water that flows to the sea.",
      sentence: "Fish swim in the _____."
    },
    {
      word: "land",
      wrong: ["lande", "lannd", "lund"],
      definition: "The dry part of the earth, not the sea.",
      sentence: "Animals live on _____ and in water."
    },
    {
      word: "gray",
      wrong: ["grey", "grayy", "grai"],
      definition: "A color between black and white.",
      sentence: "The sky looks _____ today."
    },
    {
      word: "trip",
      wrong: ["tripp", "trep", "trippe"],
      definition: "A journey to another place.",
      sentence: "Our class went on a field _____."
    },
    {
      word: "smart",
      wrong: ["smarrt", "smartt", "smert"],
      definition: "Able to think and learn well.",
      sentence: "That dog is very _____."
    },
  ],
};

function getUnitLabel(unitKey) {
  if (unitKey === "mixed") return "Mixed Challenge";
  return UNIT_LABELS[unitKey] || unitKey;
}

function getUnitWordList(unitKey) {
  if (unitKey === "mixed") {
    const seen = new Set();
    const outList = [];
    for (const k of UNIT_ORDER) {
      for (const entry of WORD_BANK[k] || []) {
        if (seen.has(entry.word)) continue;
        seen.add(entry.word);
        outList.push(entry);
      }
    }
    return outList;
  }
  return (WORD_BANK[unitKey] || []).slice();
}

function getPlayableUnits() {
  return UNIT_ORDER.filter((k) => (WORD_BANK[k] || []).length > 0);
}

function isUnitPlayable(unitKey) {
  if (unitKey === "mixed") {
    return getPlayableUnits().length >= 2;
  }
  return getUnitWordList(unitKey).length > 0;
}
