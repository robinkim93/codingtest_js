function solution(n, arr) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const DFS = (x, y) => {
    arr[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

console.log(
  solution(7, [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);

/**
 * 섬나라 아일랜드
 *
 * N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다.
 * 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
 * ▣ 입력설명
 * 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다. 두 번째 줄부터 격자판 정보가 주어진다.
 *
 * ▣ 출력설명
 * 첫 번째 줄에 섬의 개수를 출력한다.
 *
 * ▣ 입력예제 1
 * 7
 * 1100010
 * 0110110
 * 0100000
 * 0001011
 * 1101100
 * 1000100
 * 1010100
 *
 * ▣ 출력예제 1
 * 5
 */
