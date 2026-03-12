/** https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ */

/** Pseudo Code
 * 1. 스페셜 저지가 함수 return 값인 k까지면 순회하면서 비교할 것이기 때문에, nums[k]까지만 정렬을 완료하면 된다.
 * 2. 수정 인덱스를 전담하는 writePos 변수를 생성한다.
 * 3. 숫자 탐색만 하는 for문을 지정한다. 변수명은 readPos로 지정한다.
 * 4. writePos, 즉 현재까지 수정이 완료된 인덱스와 readPos, 현재 탐색중인 인덱스의 값이 다르다면 새로운 업데이트 값이 나타났다는 뜻이다.
 * 5. 그래서 writePos 뒤 자리에 nums[readPos]의 값을 채운다.
 * 6. 이후 writePos를 1 늘려준다. 4 ~ 5의 과정을 반복하면서 계속 한자리씩 밀려서 정렬이 되도록 해야 하기 때문이다.
 * 7. 최종적으로 정렬이 완료된 배열의 length를 리턴하기 위해, writePos에 1을 더한 값을 리턴해준다.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let writePos = 0;

  for (let readPos = 1; readPos < nums.length; readPos++) {
    if (nums[writePos] !== nums[readPos]) {
      writePos++;
      nums[writePos] = nums[readPos];
    }
  }

  return writePos + 1;
};
