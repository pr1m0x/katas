// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/

function longestRepetition(s) {
  let currentRepition = 1;
  let longestRepition = 0;
  let longestCharacter = '';

  s.split('').forEach((char, i, arr) => {
    if (char === arr[i + 1]) {
      currentRepition++;
    } else {
      if (currentRepition > longestRepition) {
        longestRepition = currentRepition;
        longestCharacter = char;
      }
      currentRepition = 1;
    }
  });

  return [longestCharacter, longestRepition];
}

console.log(longestRepetition(''));
