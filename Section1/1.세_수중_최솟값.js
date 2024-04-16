function solution(a, b, c) {
  let answer = a;
  if (b < a) answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
