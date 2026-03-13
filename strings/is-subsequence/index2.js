/** https://leetcode.com/problems/is-subsequence/description/ */

/** Pseudo Code
 * 1. Binary Search (Follow Up Question 대응)
 * 2. s가 많을 경우, Two Pointer 탐색은 O(n * k) (k는 s의 개수, n은 t의 length) 시간복잡도를 가짐
 * 3. 이를 해결하기 위해 t의 각 문자 인덱스를 전부 우선 기록한다.
 *
 * 4. 각 t char별로 index를 저장하는 map positionMap을 생성한다. char를 key, char가 있는 index를 가진
 * 배열을 value로 지정한다. 각 index는 오름차순으로 저장된다.
 *
 * 5. 현재 찾고 있는 s char 포지션을 기록하는 currentPos 변수를 생성한다.
 * 초기에는 아무런 변수를 탐색하지 않으므로 -1로 초기화한다.
 *
 * 6. s 전체를 순회한다.
 * 6-1. 현재 글자가 positionMap 내부에 존재하는지 확인하고, 없으면 false를 리턴한다.
 * 6-2. positionMap[현재 글자] (positions)에서 지금까지 찾은 index의 다음 index가 존재하는지 binarySearch로 탐색한다.
 * target을 찾는 binarySearch가 아니라 target 바로 다음 수를 찾는 binarySearchGreater이다.
 * 6-3. 이렇게 찾은 다음 index가 있다면, positions[해당 인덱스]를 currentPos로 기록한다. 이게 우리가 찾고자 하는
 * 현재 글자의 인덱스이기 때문
 * 6-4. 없는 경우 binary search greater 특성상 positions의 index를 초과하는 값이 출력될텐데, 그러면 false 리턴
 *
 * 7. 6번의 가드를 전부 통과했다면 subsequence가 존재한다는 뜻이므로, true를 리턴한다.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const positionMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (!positionMap.has(char)) {
      positionMap.set(char, []);
    }

    positionMap.get(char).push(i);
  }

  let currentPos = -1;

  for (const char of s) {
    const positions = positionMap.get(char);
    if (!positions) return false;

    const idx = binarySearchGreater(positions, currentPos);

    if (idx === positions.length) {
      return false;
    }

    currentPos = positions[idx];
  }

  return true;
};

function binarySearchGreater(positions, targetPos) {
  let left = 0;
  let right = positions.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (positions[mid] <= targetPos) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}

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
