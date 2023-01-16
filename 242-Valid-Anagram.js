export function isAnagram(s, t, map = new Map()) {
  const isNotEqual = s.length !== t.length;
  if (isNotEqual) return false;
  addFrequency(s, map);
  subtractFrequency(t, map);
  return checkFrequency(map);
}

const addFrequency = (word, map) => {
  for (let letter of word) {
    const frequency = (map.get(letter) || 0) + 1;
    map.set(letter, frequency);
  }
};

const subtractFrequency = (word, map) => {
  for (let letter of word) {
    if (!map.has(letter)) continue;
    const frequency = map.get(letter) - 1;
    map.set(letter, frequency);
  }
};

const checkFrequency = (map) => {
  for (const [, frequency] of map) {
    const isNotEmpty = frequency !== 0;
    if (isNotEmpty) return false;
  }
  return true;
};
