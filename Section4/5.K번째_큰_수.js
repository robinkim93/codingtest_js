function solution(k, arr) {
  let answer = 0;
  let sumArr = [];

  // 한 번 더해진 3쌍의 값은 더하지 않아도 되기 때문에 하나씩 더해줘서 중복이 없이 한다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let s = j + 1; s < arr.length; s++) {
        sumArr.push(arr[i] + arr[j] + arr[s]);
      }
    }
  }

  // reduce는 새로운 배열을 반환하기 때문에 새로 저장해주지 않으면 결과가 남지 않는다.
  sumArr = sumArr
    .sort((a, b) => b - a)
    .reduce((acc, val) => {
      return acc.includes(val) ? [...acc] : [...acc, val];
    }, []);

  answer = sumArr[k - 1];

  return answer;
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

/**
 * K번째 큰 수
 *
 * 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.
 * 3장을 뽑을 수 있는 모든 경우를 기록합니다.
 * 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
 *
 * 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.
 * ▣ 입력설명
 * 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.
 *
 * ▣ 출력설명
 * 첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.
 *
 * ▣ 입력예제 1
 * 10 3
 * 13 15 34 23 45 65 33 11 26 42
 *
 * ▣ 출력예제 1
 * 143
 */
