//TODO: Given an array of numbers and a number. Find the index of a first element which is equal to that
//TODO:   number. If there is not such a number, that find the index of the first element which is the closest to it.

function indexOfNumber(arr, num) {
  let indexOfNum = arr.indexOf(num);
  if (indexOfNum >= 0) {
    return indexOfNum;
  } else {
    let indexOfClosest = 0;
    let difference = Math.abs(arr[0] - num);

    for (let i = 1; i < arr.length; i++) {
      if (Math.abs(arr[i] - num) < difference) {
        indexOfClosest = i;
        difference = Math.abs(arr[i] - num);
      }
    }

    return indexOfClosest;
  }
}

console.log(
  `In case of [21, -9, 15, 2116, -71, 33], -71 the index will be: ${indexOfNumber(
    [21, -9, 15, 2116, -71, 33],
    -71
  )}`
);
console.log(
  `In case of [36, -12, 47, -58, 148, -55, -19, 10], -56 the index will be: ${indexOfNumber(
    [36, -12, 47, -58, 148, -55, -19, 10],
    -56
  )}`
);
console.log(
  `In case of [5, 46, 17, -2, 89, 0, 26], 36 the index will be: ${indexOfNumber(
    [5, 46, 17, -2, 89, 0, 26],
    36
  )}`
);
