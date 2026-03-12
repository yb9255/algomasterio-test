/** https://leetcode.com/problems/number-of-zero-filled-subarrays/description/ */

/** Pseudo Code
 * 1. 등차수열 공식 1부터 n까지의 합 === (n(n+1)) / 2를 이용.
 * 2. 0이 연속으로 나오면 zeroCount를 계속 늘려줌
 *
 * 3. 0이 연속되지 않는 순간 1부터 zeroCount까지의 합을 등차수열로 구해서 result에 더해주고,
 * zeroCount를 0으로 초기화
 *
 * 4. 마지막 남은 0 연속도 등차수열 공식으로 result에 더해주고 return
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let zeroCount = 0;

  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      result += (zeroCount * (zeroCount + 1)) / 2;
      zeroCount = 0;
    }
  }

  result += (zeroCount * (zeroCount + 1)) / 2;

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
