/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/ */

/** Pseudo Code
 * 1. 최대 이익을 기록하는 maxProfit, 현재까지 가장 작은 숫자를 기록하는 minPrice를 변수를 생성한다.
 * 2. 현재 날짜 i에서 가능한 최대 이익은 오늘 가격 - 가장 작은 값, 즉 prices[i] - minPrice이다.
 * 3. 현재 날짜의 최대이익을 maxProfit과 비교해서 더 크다면 maxProfit을 현재 날짜로 초기화한다.
 * 4. maxProfit을 리턴한다.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (minPrice > price) {
      minPrice = price;
    }

    maxProfit = Math.max(price - minPrice, maxProfit);
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

testSolution([7, 1, 5, 3, 6, 4], 5);
testSolution([7, 6, 4, 3, 1], 0);
