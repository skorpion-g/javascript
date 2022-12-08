//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPangram = (str) => {
  // quick obj library for quick look ups
  const alphaTrack = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0,
  }
  let lower = str.toLowerCase();
  let punctionless = lower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalStr = punctionless.replace(/\s{2,}/g," ");
  let finalArr = finalStr.split('');
  // edge case not enough letters
  if (finalArr.length < 26) {
    return false;
  }
  for (let i = 0; i < finalArr.length; i++) {
    alphaTrack[finalArr[i]] += 1
  }
  let vals = Object.values(alphaTrack);
  if (vals.indexOf(0) < 0) {
    return true;
  } else {
    return false;
  }
};

let example1 = `A qui.ck brown f,ox jumps ov!er the lazy dog .`// perfect pangram, true
let example2 = `Mr. Jock, TV quiz PhD., bags few lynx.` // perfect pangram, true
let example3 = `abc`; // too short expect faster false
let example4 = `A qui.ck brown f,o jumps ov!er the lazy dog .`  // missing x expect false
let example5 = `!!!!!!!!!!!!!!!!@@#@#abcdefghijklmnopqrstuvwxyz!!`  // expect true
isPangram(example5);