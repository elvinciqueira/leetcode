/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums, numsSet = new Set()) {
  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }
  return false;
}
