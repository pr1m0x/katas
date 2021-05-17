// https://www.codewars.com/kata/54da5a58ea159efa38000836/

function findOdd(A) {
  const nums = {};

  A.forEach((num) => {
    if (nums[num] === undefined) {
      nums[num] = 1;
    } else {
      nums[num] = nums[num] + 1;
    }
  });

  for (val in nums) {
    if (nums[val] % 2 !== 0) {
      return Number(val);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
