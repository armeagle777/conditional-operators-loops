//TODO: Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
//TODO:  row and print them as an array.

function sumOdRows(arr) {
  let resultArray = [];
  for (let element of arr) {
    let rowSum = 0;
    for (let i = 0; i < element.length; i++) {
      rowSum += element[i];
      if (i === element.length - 1) {
        resultArray.push(rowSum);
      }
    }
  }
  return resultArray;
}

//? Testing some two-dimensional arrays
console.log(
  `In case of [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] the oputput will be: ${sumOdRows(
    [
      [3, 4, 5],
      [1, 0, 0],
      [4, 5, 4],
      [8, 8, -1],
    ]
  )}`
);
console.log(
  `In case of [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] the oputput will be: ${sumOdRows(
    [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]
  )}`
);
console.log(
  `In case of [[1], [2], [3], [4]] the oputput will be: ${sumOdRows([
    [1],
    [2],
    [3],
    [4],
  ])}`
);
