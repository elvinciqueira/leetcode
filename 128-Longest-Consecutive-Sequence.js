/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums, maxScore = 0) {
  const numsSet = new Set(nums);
  for (const num of [...numsSet]) {
    const prevNum = num - 1;
    if (numsSet.has(prevNum)) continue;
    let [currNum, score] = [num, 1];
    const isStreak = () => numsSet.has(currNum + 1);
    while (isStreak()) {
      currNum++;
      score++;
    }
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
}
