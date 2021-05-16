// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

function moreZeros(s) {
  const arr = [];

  [...new Set(s)].forEach((char) => {
    if (
      char.charCodeAt(0).toString(2).split(0).join('').length < char.charCodeAt(0).toString(2).split(1).join('').length
    ) {
      arr.push(char);
    }
  });
  return arr;
}

console.log(moreZeros('abcde'));
