//TODO: Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
//TODO:   new array where each element from that array is placed under the index of its value. Start from the
//TODO:     smallest value and end with the biggest one. If there are missing values, put in its places undefined.

function indexIntoValue(arr) {
  let changedArray = [];
  for (let i = 0; i < arr.length; i++) {
    changedArray[arr[i]] = arr[i];
  }
  return changedArray;
}

console.log(
  `In case of [4, 3, 0, 9]  the output will be: ${indexIntoValue([4, 3, 0, 9])}`
);
console.log(
  `In case of [26, 30, 19, 5]  the output will be: ${indexIntoValue([
    26, 30, 19, 5,
  ])}`
);
