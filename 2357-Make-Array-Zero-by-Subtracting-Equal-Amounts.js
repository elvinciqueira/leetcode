function minimumOperations(nums) {
  let count = 0;
  while (!isNonZero(nums)) {
    let min = Math.min(...nums.filter((num) => num > 0));
    for (let i = 0; i < nums.length; i++) {
      if (isNonZero(nums[i])) nums[i] -= min;
    }
    count++;
  }
  return count;
}

const isNonZero = (arg) => {
  if (Array.isArray(arg)) {
    return arg.every((num) => num === 0);
  }
  return arg > 0;
};
