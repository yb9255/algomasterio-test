/** https://leetcode.com/problems/move-zeroes/description/ */

/** Pseudo Code
 * 1. 숫자의 위치를 변경 시 어디로 보내야 하는지 기록하는 writePos 변수를 생성
 *
 * 2. nums를 순회하면서, 만약 현재 값이 0이 아닌 값이 있다면 현재 writePos가 가리키는 위치에
 * 현재값을 위치시킴. 다음 숫자는 현재 writePos의 다음 인덱스로 와야 하므로 writePos를 1 늘려줌
 *
 * 3. writePos가 nums의 길이보다 작다면, 나머지는 0이 위치할 자리이기 때문에 writePos ~ 끝 index까지 0을 채움
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writePos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writePos++] = nums[i];
    }
  }

  while (writePos < nums.length) {
    nums[writePos++] = 0;
  }

  return nums;
};

const testSolution = (input, expected) => {
  const result = moveZeroes(input);
  console.log(
    '결과:',
    result.toString() === expected.toString()
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([0, 1, 0, 3, 12], [1, 3, 12, 0, 0]);
testSolution([0], [0]);
