function solution(n) {
  let answer = "";

  let stack = [];

  for (const x of n) {
    // 닫는 괄호가 나올 때 까지 stack에 x를 push하고
    // 닫는 괄호가 나왔을 때 stack에서 여는 괄호가 아닐 때 까지 stack의 요소를 제거
    // 여는 괄호까지 pop으로 제거하고 멈춘다.
    // 이미 pop으로 제거한 값이 여는 괄호이기 때문에 멈춤.
    // pop으로 떼어낸 값과 비교하는 것이 아닌 이미 stack에서는 pop을 하는 순간 요소가 제거되어있음
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }

  answer = stack.join("");

  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

/**
 * 괄호 문자 제거
 *
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
 *
 * ▣ 입력설명
 * 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 *
 * ▣ 출력설명
 * 남은 문자만 출력한다.
 *
 * ▣ 입력예제 1
 * (A(BC)D)EF(G(H)(IJ)K)LM(N)
 *
 * ▣ 출력예제 1
 * EFLM
 */
