//TODO: Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function numberIsMultiple(num) {
  const remainderOfThree = num % 3;
  const remainderOfFive = num % 5;
  const remainderOfSeven = num % 7;
  let outputMessage = '';
  if (!remainderOfThree && !remainderOfFive && !remainderOfSeven) {
    outputMessage = `${num} is a multiple of 3, 5 and 7.`;
  } else if (!remainderOfThree && !remainderOfFive) {
    outputMessage = `${num} is a multiple of 3  and 5.`;
  } else if (!remainderOfThree && !remainderOfSeven) {
    outputMessage = `${num} is a multiple of 3  and 7.`;
  } else if (!remainderOfFive && !remainderOfSeven) {
    outputMessage = `${num} is a multiple of 5  and 7.`;
  } else if (!remainderOfThree) {
    outputMessage = `${num} is a multiple of 3.`;
  } else if (!remainderOfFive) {
    outputMessage = `${num} is a multiple of 5.`;
  } else if (!remainderOfSeven) {
    outputMessage = `${num} is a multiple of 7.`;
  } else {
    outputMessage = `${num} is not a multiple of 3, 5 or 7.`;
  }
  return outputMessage;
}

//? Testing numbers 21, 35, 13, 420, 24
console.log(`In case of 21 the output is: ${numberIsMultiple(21)}`);
console.log(`In case of 35 the output is: ${numberIsMultiple(35)}`);
console.log(`In case of 13 the output is: ${numberIsMultiple(13)}`);
console.log(`In case of 420 the output is: ${numberIsMultiple(420)}`);
console.log(`In case of 24 the output is: ${numberIsMultiple(24)}`);
