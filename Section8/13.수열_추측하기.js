function solution(n, f) {
  let answer;
  let ch = Array.from({ length: n + 1 }, () => 0);
  let combinationArr = Array.from({ length: n }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let flag = 0;

  const getCombination = (n, r) => {
    // n개 중 n개를 선택하는 경우는 모두 선택하는 경우이기 때문에 1
    // n개 중 0개를 선택하는 경우도 모두 선택하지 않는 경우이기 때문에 1
    if (n === r || r === 0) return 1;
    // n개 중 r개를 선택하는 경우의 수는 nCr로 표현이 가능하고, 조합의 갯수를 구하는 공식은
    // n-1Cr-1 + n-1Cr로 재귀로 계속 파고 들어가서 조합의 갯수를 구할 수 있는데
    // 5개 중 3개를 선택하는 5C3의 식이라면 4C2 + 4C3으로 표현하는데
    // 1에서 5부터 숫자라고 하면 1을 제외한 나머지 2,3,4,5에서 2개를 선택하는 4C2와
    // 1을 포함한 상태에서 2,3,4,5 중 3개를 선택하는 4C3의 경우의 수의 합과 같다는 뜻이다
    else return getCombination(n - 1, r - 1) + getCombination(n - 1, r);
  };

  // 1, 2, 3, 4를 순열로 돌려서 각 자릿수에 getCombinationArr의 자릿수에 맞춰 곱했을 때, 값이 16이 되면 정답으로 리턴
  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = [...p];
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + p[L] * combinationArr[L]);
          ch[i] = 0;
        }
      }
    }
  };

  // n-1 개 중 i개를 선택하는 경우의 수의 숫자를 저장
  // 3C0 / 3C1 / 3C2 / 3C3 라고 했을 때
  // 3개 중 0개를 뽑는 경우는 아무것도 뽑지 않는 경우 1가지 경우
  // 3개 중 1개를 뽑는 경우는 1, 2, 3으로 3가지 경우
  // 3개 중 2개를 뽑는 경우는, 12, 13, 23 으로 3가지 경우
  // 3개 중 3개를 뽑는 경우는 123으로 1가지 경우
  // 그래서 n이 4일 때는 자릿수 별로 1 3 3 1 의 숫자가 나오고
  // 후에 1부터 n개의 숫자 조합에 자릿수별로 곱해서 f와 같은 값을 찾기 위함
  for (let i = 0; i < n; i++) {
    combinationArr[i] = getCombination(n - 1, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));

/**
 * 수열 추측하기
 *
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
 * 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
 * 3 1 2 4
 *  4 3 6
 *   7 9
 *   16
 *
 * N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
 *
 * ▣ 입력설명
 * 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의 미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.
 *
 * ▣ 출력설명
 * 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다.
 *
 * ▣ 입력예제 1
 * 4 16
 *
 * ▣ 출력예제 1
 * 3 1 2 4
 */
