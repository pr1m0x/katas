// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
  let str = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      str.push(s[i]);
    } else {
      str.splice(-1);
    }
  }

  return str.join('');
}

console.log(cleanString('abc#d##c'));
