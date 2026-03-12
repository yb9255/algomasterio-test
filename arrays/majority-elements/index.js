/** https://leetcode.com/problems/majority-element/description/ */

/** Pseudo Code
 * 0. Boyer-Moore Voting Algorithm 응용
 *
 * 1. 정답 숫자는 나머지 모든 숫자와 매핑된 다음 적어도 1개는 남아야 한다.
 * 2. 따라서 후보군 숫자 중 다른 숫자와 매핑 시 0이 된다면, 그 숫자는 주요 숫자가 아니다.
 *
 * 3. 숫자 전체를 순회하면서, 후보군 숫자의 갯수를 1 늘리거나 줄이는 것을 결정한다.
 * 3-1. 현재 순회하는 숫자가 후보군 숫자와 같다면 갯수를 1 늘려줌
 * 3-2. 현재 순회하는 숫자가 후보군 숫자와 다르다면 갯수를 1 줄여줌
 *
 * 4. 후보군 숫자의 갯수가 0이 되면, 현재 후보군 숫자는 현재 순회 시점까지는 주요 숫자가 아니다.
 * 따라서 후보군 숫자를 다른 숫자로 바꿔준다.
 *
 * 5. 이를 반복하다보면 최종적으로 매핑이 다 끝났음에도 남는 숫자가 존재한다. 그 숫자를 정답으로 리턴한다.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

const testSolution = (input, expected) => {
  const result = majorityElement(input);
  console.log(
    '결과:',
    result === expected
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([3, 2, 3], 3);
testSolution([2, 2, 1, 1, 1, 2, 2], 2);
