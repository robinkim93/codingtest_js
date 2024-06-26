function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let m = arr[0].length;

  for (let i = 1; i <= m; i++) {
    // 학생 A의 학생번호
    for (let j = 1; j <= m; j++) {
      // 학생 B의 학생번호
      let count = 0;
      for (let k = 0; k < n; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < m; s++) {
          // k 회차에서 s 등이 학생 A의 번호와 같으면 pi에 s등을 할당
          if (arr[k][s] === i) pi = s;
          // k 회차에서 s 등이 학생 B의 번호와 같으면 pj에 s등을 할당
          if (arr[k][s] === j) pj = s;
        }
        // 회차마다 pi의 순위가 pj보다 상위순위라면 count를 하나 올려줌 (k번째 회차에서 멘토, 멘티의 조건을 충족한 경우 올려줌)
        // 예를 i가 3이고, j가 1일 때 1회차에서 각 각 1등, 3등으로 한 번 카운트, 2회차에서 2등, 4등으로 한 번 카운트, 3회차에서 1등, 2등으로 한 번 카운트를 올린다.
        if (pi < pj) count++;
      }
      // n은 총 시험의 회차이며, count는 회차마다 조건에 맞을 경우에만 한 번 씩 올라가기 때문에 모든 회차에서 카운트 됐어야만 조건에 충족하고
      // i와 j가 k번의 회차동안 조건을 충족했다면 하나의 케이스로 보고 answer를 하나 카운트한다.
      // 여기에서 i와 j의 조건을 충족할 수 있는 경우는 [[3,1], [3,2], [4,2]] 이기 때문에, 카운트가 3개 올라가서 정답이 3이 된다.
      if (count === n) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);

/**
 * 멘토링
 *
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
 *
 * ▣ 입력설명
 * 첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
 * 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
 * 만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
 *
 * ▣ 출력설명
 * 첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
 *
 * ▣ 입력예제 1
 * 4 3
 * 3 4 1 2
 * 4 3 2 1
 * 3 1 4 2
 *
 * ▣ 출력예제 1
 * 3
 *
 * (3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.
 */
