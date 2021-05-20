// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  const str1Index = {};
  const str2Index = {};

  for (let i = 0; i < str1.length; i++) {
    if (!str1Index[str1[i]]) {
      str1Index[str1[i]] = 1;
    } else {
      str1Index[str1[i]] = str1Index[str1[i]] + 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!str2Index[str2[i]]) {
      str2Index[str2[i]] = 1;
    } else {
      str2Index[str2[i]] = str2Index[str2[i]] + 1;
    }
  }

  for (char in str2Index) {
    if (str1Index[char] < str2Index[char] || str1Index[char] === undefined) {
      return false;
    }
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
