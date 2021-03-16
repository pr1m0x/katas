// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const nums = numbers
    .split(' ')
    .map((char) => +char)
    .sort((a, b) => {
      return b - a;
    });

  return `${nums[0]} ${nums[nums.length - 1]}`;
}
