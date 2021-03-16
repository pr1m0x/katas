// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.split('').forEach((char) => (vowels.includes(char) ? vowelsCount++ : ''));

  return vowelsCount;
}

// (getCount("abracadabra"), 5)
