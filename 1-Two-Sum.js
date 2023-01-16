function twoSum(nums, target, map = new Map()) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const difference = target - num;
    const sumIndex = map.get(difference);
    const isTarget = map.has(difference);
    if (isTarget) return [index, sumIndex];
    map.set(num, index);
  }
  return [-1, -1];
}
