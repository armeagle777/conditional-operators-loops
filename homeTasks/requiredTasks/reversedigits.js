//TODO: Enter a number. Reverse its first and last digits. Print the new number.

function reverseNumberDigits(num) {
  if (num < 10) {
    return num;
  }

  let reversedNumber;
  const numToArray = Array.from(num.toString());

  if (numToArray.length === 2) {
    reversedNumber = Number(numToArray.reverse().join(''));
  } else {
    const newArray = [];
    const newFirstElement = numToArray[numToArray.length - 1];
    const newLastElement = numToArray[0];

    for (let i = 1; i < numToArray.length - 1; i++) {
      newArray.push(numToArray[i]);
    }

    newArray.unshift(newFirstElement);
    newArray.push(newLastElement);
    reversedNumber = Number(newArray.join(''));
  }

  return reversedNumber;
}

//? Testing numbers 2, 13, 895796

console.log(`In case of 2 the output will be : ${reverseNumberDigits(2)}`);
console.log(`In case of 13 the output will be : ${reverseNumberDigits(13)}`);
console.log(
  `In case of 895796 the output will be : ${reverseNumberDigits(895796)}`
);
