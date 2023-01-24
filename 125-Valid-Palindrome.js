/**
 * Array - Filter && Clone && Reverse
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(word) {
  const hasAtLeastOneChar = !word.length;
  if (hasAtLeastOneChar) return true;
  const alphaNumeric = filterAlphaNumeric(word);
  const reversed = reverse(word);
  return alphaNumeric === reversed;
}

const filterAlphaNumeric = (
  word,
  nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')
) => word.toLowerCase().replace(nonAlphaNumeric, '');

const reverse = (word) => word.split('').reverse().join('');

/**
 * 2 Pointer | Midde Convergence
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(word) {
  const hasAtLeastOneChar = !word.length <= 1;
  if (hasAtLeastOneChar) return true;
  let [left, right] = [0, word.length - 1];
  let [leftChar, rightChar] = ['', ''];
  while (left < right) {
    leftChar = word[left];
    rightChar = word[right];
    if (!isAlphaNumeric(leftChar)) {
      left++;
    } else if (!isAlphaNumeric(rightChar)) {
      right--;
    } else {
      if (isEqualChar(leftChar, rightChar)) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
}

const isAlphaNumeric = (word) => /[a-zA-Z0-9]/.test(word);

const isEqualChar = (charA, charB) =>
  charA.toLowerCase() != charB.toLowerCase();
