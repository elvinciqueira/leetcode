export function isAnagram(s, t, map = new Map()) {
  const isNotEqual = s.length !== t.length;
  if (isNotEqual) return false;
  addFrequency(s, map);
  subtractFrequency(t, map);
  return checkFrequency(map);
}

const addFrequency = (word, map) => {
  for (let char of word) {
    const count = (map.get(char) || 0) + 1;
    map.set(char, count);
  }
};

const subtractFrequency = (word, map) => {
  for (let char of word) {
    if (!map.has(char)) continue;
    const count = map.get(char) - 1;
    map.set(char, count);
  }
};

const checkFrequency = (map) => {
  for (const [, count] of map) {
    const isNotEmpty = count !== 0;
    if (isNotEmpty) return false;
  }
  return true;
};
