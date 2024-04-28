function solution(m, arr) {
  let answer = 0;

  /**
   * 첫번째 풀이
   *
   * 가장 비싼 상품가격을 50% 할인 시켜놓고 시작했음
   * 문제는 가장 비싼 가격이 6원이어서 50% 할인을 시켜놓고 시작하는데 나머지 요소으 상품 가격 중 6의 50%인 3보다 낮은 가격이 있으면
   * 가장 비싼 가격에 50%를 할인시켜놓는 것은 의미가 없음
   *
   * 고로, 모든 상품가격을 50% 해놓고 나머지를 다 더해서 m보다 커지는 경우에 멈춰서 그 카운트를 반환해야 맞는 정답이 됨.
   * 완전 탐색의 경우인데 많이 풀어보면서 완전탐색이 필요한지 안한지 구별하는 것이 중요해보임
   */

  // let priceArr = [];

  // let max = arr[0][0];
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i][0] > max) {
  //     max = arr[i][0];
  //     arr[i][0] = arr[i][0] / 2;
  //   }
  //   priceArr.push(arr[i][0] + arr[i][1]);
  // }

  // priceArr.sort((a, b) => a - b);

  // for (const n of priceArr) {
  //   if (sum + n > m) {
  //     console.log({ data: sum + n, m });
  //     break;
  //   }

  //   sum += n;
  //   answer++;
  // }

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < arr.length; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      let sumProductDelivery = arr[j][0] + arr[j][1];
      if (j !== i && money < sumProductDelivery) break;
      if (j !== i && money >= sumProductDelivery) {
        money -= sumProductDelivery;
        count++;
      }
      answer = Math.max(answer, count);
    }
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [10, 3],
    [2, 2],
    [4, 3],
    [4, 5],
  ])
);

/**
 * 졸업 선물
 *
 * 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 * 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
 * 선생님은 상품 하나를 50% 할인해서 (반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
 *
 * ▣ 입력설명
 * 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
 * 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다. 상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.
 *
 * ▣ 출력설명
 * 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.
 *
 * ▣ 입력예제 1
 * 5 28
 *
 * 6 6
 * 2 2
 * 4 3
 * 4 5
 * 10 3
 *
 * ▣ 출력예제 1
 * 4
 *
 * 출력설명
 * (2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.
 */
