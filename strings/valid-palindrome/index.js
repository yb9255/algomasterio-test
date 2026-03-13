/** https://leetcode.com/problems/valid-palindrome/description/ */

/** Pseudo Code
 * 1. 문자열이 alphanumeric 하지 않다면 left와 right 모두 건너뛴다.
 * 2. 건너뛴 left와 right 인덱스의 s가 전부 같다면 true, 하나라도 다르면 false 리턴
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphanumeric = (str) => /[a-zA-Z0-9]/.test(str);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const testSolution = (input, expected) => {
  const result = isPalindrome(input);
  console.log(
    '결과:',
    result === expected
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution('A man, a plan, a canal: Panama', true);
testSolution('race a car', false);
testSolution(' ', true);
