// https://www.codewars.com/kata/525c65e51bf619685c000059

const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

function cakes(recipe, available) {
  let cakesAmount = Infinity;

  for (ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }

    if (Math.floor(available[ingredient] / recipe[ingredient] < cakesAmount)) {
      cakesAmount = Math.floor(available[ingredient] / recipe[ingredient]);
    }
  }

  return cakesAmount;
}

cakes(recipe, available);
