/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const guess = nums[mid];

    const isTarget = target === guess;
    if (isTarget) return mid;

    const isTargetGreater = target > guess;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = target < guess;
    if (isTargetLess) right = mid - 1;
  }

  return -1;
}
