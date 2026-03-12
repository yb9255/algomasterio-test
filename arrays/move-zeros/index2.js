/** https://leetcode.com/problems/move-zeroes/description/ */

/** Pseudo Code
 * 1. 숫자의 위치를 변경 시 어디로 보내야 하는지 기록하는 writePos 변수를 생성
 * 2. nums 전체를 순회하면서 현재 순회값이 0이 아니라면 writePos의 값과 현재 순회값의 위치를 변경
 * 3. 다음 0이 아닌 숫자는 writePos의 다음 인덱스로 와야 하므로 writePos를 1 늘려줌
 * 4. nums 리턴
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writePos = 0;

  for (let readPos = 0; readPos < nums.length; readPos++) {
    if (nums[readPos] !== 0) {
      if (readPos !== writePos) {
        [nums[readPos], nums[writePos]] = [nums[writePos], nums[readPos]];
      }

      writePos++;
    }
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
