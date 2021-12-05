//TODO: Given an array of strings and numbers. Print the number of integers and the number of strings in the
//TODO:   array.
function countNumbersAndIntegers(arr) {
  let stringCount = 0;
  let intCount = 0;

  for (let el of arr) {
    if (typeof el === 'number') {
      intCount++;
    } else if (typeof el === 'string') {
      stringCount++;
    }
  }

  return `“Numbers: ${intCount} , Strings: ${stringCount}`;
}

//? Testing arrays
console.log(
  `In case of [1, ‘10ʼ, ‘hiʼ, 2, 3] the output will be -  ${countNumbersAndIntegers(
    [1, '10', 'hi', 2, 3]
  )}`
);
console.log(
  `In case of [1, 4, ‘i am a stringʼ, ‘456ʼ] the output will be -  ${countNumbersAndIntegers(
    [1, 4, 'i am a string', '456']
  )}`
);
