/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/ */

/** Pseudo Code
 * 1. Greedy 알고리즘으로 접근
 * 2. 이 문제는 매 거래마다 제약이 없으므로 같은 기간을 더 작은 여러 기간으로 쪼개서 합해도 수익의 합이 차이가 나지 않음.
 * 3. 그래서 날짜가 지날때마다 오늘 주식 가격이 어제보다 오른 경우 계속 판매하는 greedy 구현으로 최대 이익을 구할 수 있음.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
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
