function solution(a, b, c) {
  let answer = a;
  if (b < a) answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));

/**
 * 세 수중 최솟값
 *
 * 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성 (정렬 사용 X)
 */
