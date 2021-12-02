//TODO: Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
//TODO:  the last digit of the inserted number is 0, number remains the same.

function lastDigitToBeginning(int) {
  if (int % 10 === 0 || int < 10) {
    return int;
  }

  const lastDigit = int % 10;
  return Number(lastDigit + '' + parseInt(int / 10));
}

//? Testing cases 367, 1002, 250, 8

console.log(`in case 367 the output will be : ${lastDigitToBeginning(367)}`);
console.log(`in case 1002 the output will be : ${lastDigitToBeginning(1002)}`);
console.log(`in case 250 the output will be : ${lastDigitToBeginning(250)}`);
console.log(`in case 8 the output will be : ${lastDigitToBeginning(8)}`);
