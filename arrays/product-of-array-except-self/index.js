/** https://algomaster.io/learn/dsa/product-of-array-except-self */

/** Pseudo Code
 * 1. i번째 까지 수의 총 곱을 기록하는 prefix 배열을 생성
 * e.g. prefix[i] = 0번째 부터 i - 1번째 수까지의 총 곱
 * 2. i + 1번째부터 끝 인덱스까지의 총 곱을 기록하는 suffix 배열을 생성
 * e.g. suffix[i] = i + 1번째부터 끝 인덱스까지의 총 곱
 * 3. i번째 수는 prefix[i] * suffix[i]로 구할 수 있다. 자기 자신을 제외한 모든 수의 곱이 되므로.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = Array(n);
  const prefix = Array(n);
  const suffix = Array(n);

  prefix[0] = 1;

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  suffix[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    output[i] = prefix[i] * suffix[i];
  }

  return output;
};

const testSolution = (input, expected) => {
  const result = productExceptSelf(input);
  console.log(
    '결과:',
    result.toString() === expected.toString()
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([1, 2, 3, 4], [24, 12, 8, 6]);
testSolution([-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]);
