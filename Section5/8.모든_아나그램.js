function compareHash(hash1, hash2) {
  if (hash1.size !== hash2.size) return false;

  for (const [key, value] of hash1) {
    if (!hash2.has(key) || hash2.get(key) !== value) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;

  let tHash = new Map();
  let sHash = new Map();
  let tLength = t.length - 1;

  for (const str of t) {
    if (!tHash.has(str)) tHash.set(str, 1);
    else tHash.set(str, tHash.get(str) + 1);
  }

  for (let i = 0; i < tLength; i++) {
    if (!sHash.has(s[i])) sHash.set(s[i], 1);
    else sHash.set(s[i], sHash.get(s[i]) + 1);
  }

  let lt = 0;

  for (let rt = tLength; rt < s.length; rt++) {
    if (!sHash.has(s[rt])) sHash.set(s[rt], 1);
    else sHash.set(s[rt], sHash.get(s[rt]) + 1);

    if (compareHash(tHash, sHash)) answer++;

    if (sHash.get(s[lt]) === 1) sHash.delete(s[lt]);
    else sHash.set(s[lt], sHash.get(s[lt]) - 1);

    lt++;
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));

/**
 * 모든 아나그램
 *
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 *
 * ▣ 입력설명
 * 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 *
 * ▣ 출력설명
 * S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 *
 * ▣ 입력예제 1
 * bacaAacba
 * abc
 *
 * ▣ 출력예제 1
 * 3
 */
