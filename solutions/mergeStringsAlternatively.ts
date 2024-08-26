/* 1768: Merge Strings Alternatively */

export function mergeAlternately(word1: string, word2: string): string {
  let mergedStr = "";
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i += 1) {
    if (word1[i]) {
      mergedStr += word1[i];
    }

    if (word2[i]) {
      mergedStr += word2[i];
    }
  }

  return mergedStr;
}
