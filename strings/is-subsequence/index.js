/** https://leetcode.com/problems/is-subsequence/description/ */

/** Pseudo Code
 * 1. Two Pointer
 * 2. i: 현재 찾고 있는 s 글자 index
 * 3. j: 현재 탐색 중인 t 글자 index
 *
 * 4. t로 순회하면서 현재 찾고있는 i가 발견되면 i를 증가시킴.
 * t index를 앞에서 뒤로 순차적으로 순회하기 때문에
 * s 글자를 찾는 순서는 자동으로 보장이 됨.
 *
 * 5. i가 s의 길이만큼 늘어났다면 모든 글자를 찾았다는 뜻이므로 true, 아니면 false 리턴
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;

  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;
  }

  return i === s.length;
};

const testSolution = (s, t, expected) => {
  const result = isSubsequence(s, t);
  console.log(
    '결과:',
    result === expected
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution('abc', 'ahbgdc', true);
testSolution('axc', 'ahbgdc', false);
