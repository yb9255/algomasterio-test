/** https://leetcode.com/problems/rotate-array/description/ */

/** Pseudo Code
 * 1. 배열 전체를 뒤집는다.
 * 2. 맨 처음부터 k - 1번째 인덱스까지 다시 뒤집어서 원래 순서로 돌려준다.
 * 3. k번쨰 인덱스부터 끝까지 다시 뒤집어서 기존 배열의 순서로 돌려준다.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.reverse();
  k %= nums.length;

  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

const testSolution = (nums, k, expected) => {
  rotate(nums, k);

  console.log(
    '결과:',
    nums.toString() === expected.toString()
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]);
testSolution([-1, -100, 3, 99], 2, [3, 99, -1, -100]);
