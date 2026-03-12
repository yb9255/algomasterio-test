/** https://leetcode.com/problems/number-of-zero-filled-subarrays/description/ */

/** Pseudo Code
 * 1. 0이 연속해서 나오면, 0이 연속해서 나오는 길이만큼 계속 결과에 더해줌
 * 2. 0이 연속되지 않으면, streak을 0으로 초기화
 * 3. 결과를 리턴
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let streak = 0;

  for (const num of nums) {
    if (num === 0) {
      streak++;
      result += streak;
    } else {
      streak = 0;
    }
  }

  return result;
};

const testSolution = (input, expected) => {
  const result = zeroFilledSubarray(input);
  console.log(
    '결과:',
    result.toString() === expected.toString()
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([1, 3, 0, 0, 2, 0, 0, 4], 6);
testSolution([0, 0, 0, 2, 0, 0], 9);
testSolution([2, 10, 2019], 0);
