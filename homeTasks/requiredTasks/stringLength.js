//TODO: Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
//TODO:  of their lengths.

function minMaxLength(arr) {
  let minLength = 0;
  let maxLength = 0;
  let sortedArray = arr.sort((elOne, elTwo) => {
    return elOne.length - elTwo.length;
  });
  minLength = sortedArray[0].length;
  maxLength = sortedArray[sortedArray.length - 1].length;

  return minLength + maxLength;
}

console.log(
  `In case of [“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”] the output will be: ${minMaxLength(
    ['wish', 'slightly', 'understand', 'longer', 'unexpected', 'heart']
  )}`
);
console.log(
  `In case of [“anymore”, “raven”, “me”, “communicate”] the output will be: ${minMaxLength(
    ['anymore', 'raven', 'me', 'communicate']
  )}`
);
