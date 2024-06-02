function solution(n, r) {
  let answer;
  let memoizationArray = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  const DFS = (n, r) => {
    if (memoizationArray[n][r] !== 0) return memoizationArray[n][r];
    if (r === 0 || n === r) return 1;
    else return (memoizationArray[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };

  answer = DFS(n, r);

  return answer;
}

console.log(solution(33, 19));

/**
 * 조합의 경우수 (메모이제이션)
 *
 * 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
 * 공식 : n C r = n-1 C r-1 + n-1 C r
 *
 * ▣ 입력설명
 * 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
 *
 * ▣ 출력설명
 * 첫째 줄에 조합수를 출력합니다.
 *
 * ▣ 입력예제 1
 * 5 3
 *
 * ▣ 출력예제 1
 * 10
 *
 * ▣ 입력예제 2
 * 33 19
 *
 * ▣ 출력예제 2
 * 818809200
 */
