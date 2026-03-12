/** https://leetcode.com/problems/increasing-triplet-subsequence/ */

/** Pseudo Code
 * 1. 모든 수를 탐색한다.
 * 2. 현재 탐색한 수가 first보다 작은 경우, 우선적으로 first를 해당 수로 초기화한다.
 * 2. 만약 이후 수가 first보다 크다면, first 뒤에 있는 수를 탐색하다가 발견된 것이므로 최소 2자리 부분수열은 있음이 증명된다.
 * 3. first보다 크지만 second보다 작은 수를 발견한다면, second로 해당 수를 초기화한다.
 * 4. first, second 둘 다보다 큰 수가 탐색 중 발견된다면, 이전 수를 탐색하다가 first/second가 발견된 다음 뒤의 수에서
 * 세번째 큰 수가 나온 것이므로 triplet 부분수열은 있음이 증명된다. true를 리턴한다.
 * 5. 수 전체를 순회할때까지 리턴되지 않았다면, triplet 부분수열은 없음이 증명된다. false를 리턴한다.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
};

const testSolution = (input, expected) => {
  const result = increasingTriplet(input);
  console.log(
    '결과:',
    result === expected
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([1, 2, 3, 4, 5], true);
testSolution([5, 4, 3, 2, 1], false);
testSolution([2, 1, 5, 0, 4, 6], true);
