function solution(n, m) {
  let answer = [];
  let queue = [];

  queue.push(n);

  if (7 > 7) {
    console.log("true");
  }

  // 24. queue의 length가 0이 되면서 while문 루프 종료.
  while (queue.length) {
    // 1. v는 초기값인 1이 됨. queue = [] 상태
    // 5. v는 이 전 while문 루프에서 shift로 1이 빠지고 for문의 첫번째 루프에서 push 된 2가 됨. queue = [3] 상태
    // 9. v는 이 전 while문 루프에서 shift로 2가 빠지고 for문의 두번째 루프에서 push 된 3이 됨. queue = [4,5] 상태
    // 11. v는 이 전 while문 루프에서 shift로 3이 빠지고 for문의 첫번째 루프에서 push 된 4가 됨. queue = [5,6,7] 상태
    // 15. v는 이 전 while문 루프에서 shift로 4가 빠지고 for문의 두번째 루프에서 push 된 5가 됨. queue = [6, 7] 상태
    // 18. v는 이 전 while문 루프에서 shift로 5가 빠지고 for문의 첫번째 루프에서 push 된 6이 됨. queue = [7] 상태
    // 21. v는 이 전 while문 루프에서 shift로 6이 빠지고 for문의 두번째 루프에서 push 된 7이 됨. queue = [] 상태
    let v = queue.shift();
    // 2. 1이 answer에 push
    // 6. 2가 answer에 push
    // 7. 3이 answer에 push
    // 12. 4가 answer에 push
    // 16. 5가 answer에 push
    // 19. 6이 answer에 push
    // 22. 7이 answer에 push
    answer.push(v);
    // 3. [2, 3] 배열에서 nv를 꺼내 nv가 7이 되면 해당 for문 루프 건너뜀
    // 4. 아니라면 첫번째 루프에서 2 push, 두번째 루프에서 3 push
    // 7. [4, 5] 배열에서 nv를 꺼내 7이 되면 해당 for문 루프 건너뜀
    // 8. 아니라면 첫번째 루프에서 4 push, 두번째 루프에서 5 push
    // 9. [6, 7] 배열에서 nv를 꺼내 7이 되면 해당 for문 루프 건너뜀
    // 10. 아니라면 첫번째 루프에서 6 push, 두번째 루프에서 7 push
    // 13. [8, 9] 배열에서 nv를 꺼내 7이 되면 해당 for문 루프 건너뜀
    // 14. 두 개의 루프 전부 건너뜀
    // 17. [10, 11] 배열이기 때문에 두 개 루프 전부 건너뜀
    // 20. [12, 13] 배열이기 때문에 두 개 루프 전부 건너뜀
    // 23. [14, 15] 배열이기 때문에 두 개 루프 전부 건너뜀
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > m) {
        break;
      }
      queue.push(nv);
    }
  }
  // 25. 1~7까지 순차적으로 push한 answer를 답으로 return

  return answer;
}

console.log(solution(1, 7));

/**
 * 이진트리 너비우선탐색 (BFS)
 *
 * n에서 m까지 수를 BFS를 사용하여 출력
 */
