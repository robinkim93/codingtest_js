function solution(weights) {
  // let answer = 0;
  // let tmp = [];
  // for (let i = 0; i < weights.length; i++) {
  //   for (let j = i + 1; j < weights.length; j++) {
  //     for (let k = 1; k <= 4; k++) {
  //       for (let l = 1; l <= 4; l++) {
  //         if (weights[i] * k === weights[j] * l) {
  //           tmp.push([weights[i], weights[j]]);
  //         }
  //       }
  //     }
  //   }
  // }

  // answer = Array.from(new Set(tmp.map(JSON.stringify))).map(JSON.parse);

  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));

/**
 * 제목
 *
 * 어느 공원 놀이터에는 시소가 하나 설치되어 있습니다. 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.
 * 이 시소를 두 명이 마주 보고 탄다고 할 때, 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍이라고 합니다.
 * 즉, 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.
 * 사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성해주세요.
 */
