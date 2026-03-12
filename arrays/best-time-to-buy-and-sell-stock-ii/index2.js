/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/ */

/** Pseudo Code
 * 1. peak - valley 접근법
 * 2. 우선 이전 날짜보다 숫자가 작은 valley의 index를 찾고, valley 값을 업데이트 한다.
 * 3. 그 다음 이전 날짜보다 숫자가 높은 peak의 index를 찾고, peak의 값을 업데이트 한다.
 * 4. maxProfit에 peak - valley의 값을 더한 다음, peak 시점 index부터 2~3을 반복한다.
 * 5. maxProfit을 리턴
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 0;
  let maxProfit = 0;
  let valley = prices[0];
  let peak = prices[0];

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }

    valley = prices[i];

    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }

    peak = prices[i];

    maxProfit += peak - valley;
  }

  return maxProfit;
};

const testSolution = (input, expected) => {
  const result = maxProfit(input);
  console.log(
    '결과:',
    result === expected
      ? '✅ 통과'
      : `❌ 실패 (기대값: ${expected}, 실제값: ${result})`,
  );
};

testSolution([7, 1, 5, 3, 6, 4], 7);
testSolution([1, 2, 3, 4, 5], 4);
testSolution([7, 6, 4, 3, 1], 0);
