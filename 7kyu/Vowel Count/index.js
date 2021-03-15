function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.split('').forEach((char) => (vowels.includes(char) ? vowelsCount++ : ''));

  return vowelsCount;
}

console.log(getCount('abracadabra'));
