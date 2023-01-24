function isValid(s) {
  const stack = [];
  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  for (const char of s) {
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
    }
    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
    }
    return false;
  }
  return stack.length === 0;
}
