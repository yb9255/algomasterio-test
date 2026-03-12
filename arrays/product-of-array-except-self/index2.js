/** https://algomaster.io/learn/dsa/product-of-array-except-self */

/** Pseudo Code
 * 1. 이전 풀이에서 공간 복잡도 최적화를 위해 suffix와 prefix를 제거하는 버전
 * 2. 우선 output에 바로 이전 prefix 값을 배치한다.
 *
 * 3. 오른쪽부터 왼쪽으로 곱을 누적하는 배열 right를 만들고, right를 누적시켜가며 대응하는 output
 * index에 값을 그때그때 곱해주면서 output 배열을 완성한다.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = Array(n);

  output[0] = 1;

  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
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
