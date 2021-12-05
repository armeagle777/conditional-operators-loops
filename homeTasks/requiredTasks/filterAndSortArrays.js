//TODO: Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
//TODO:  numbers in a separate array. Arrange them such as from the beginning are the odds and from the
//TODO:    ending the evens.
function filterAndSort(arr) {
  const arrayOfOdds = [];
  const arrayOfRest = [];
  let filteredArr = arr.filter(el => typeof el === 'number');
  for (let element of filteredArr) {
    if (element % 2 > 0) {
      arrayOfOdds.push(element);
    } else {
      arrayOfRest.push(element);
    }
  }
  let resultArray = [...arrayOfOdds, ...arrayOfRest];
  return resultArray;
}

//? Testing given arrays
console.log(
  `In case of [8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3]  the output will be: ${filterAndSort(
    [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3]
  )}`
);
console.log(
  `In case of [8, 8, ‘mehʼ, 6]  the output will be: ${filterAndSort([
    8,
    8,
    'meh',
    6,
  ])}`
);
console.log(
  `In case of [null, null, 1, undefined, 5, 9, false]  the output will be: ${filterAndSort(
    [null, null, 1, undefined, 5, 9, false]
  )}`
);
