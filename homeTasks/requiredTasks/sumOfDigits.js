//TODO: Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
//TODO:  sum, print the quotient, otherwise print the remainder.

function calculateSumOfDigits(num) {
  numberStringified = num.toString();
  if (num === 0) {
    return 'Cannot calculate.';
  }
  if (numberStringified.length === 1) {
    return 'Quotient is 1.';
  } else {
    let sumOfDigits = 0;
    let productOfDigits = 1;
    arrayFromDigits = Array.from(numberStringified);
    if (arrayFromDigits.includes('0')) {
      return 'Cannot calculate.';
    }
    for (let singleDigit of arrayFromDigits) {
      sumOfDigits += Number(singleDigit);
      productOfDigits *= Number(singleDigit);
    }
    if (productOfDigits % sumOfDigits === 0) {
      return `Quotient is ${productOfDigits / sumOfDigits}`;
    } else {
      return `Remainder is ${productOfDigits % sumOfDigits}`;
    }
  }
}

//? Tsting for numbers 1233, 5, 0, 455
console.log(
  `In case of 1233 the output will be: ${calculateSumOfDigits(1233)}`
);
console.log(`In case of 5 the output will be: ${calculateSumOfDigits(5)}`);
console.log(`In case of 0 the output will be: ${calculateSumOfDigits(0)}`);
console.log(`In case of 455 the output will be: ${calculateSumOfDigits(455)}`);
console.log(`In case of 405 the output will be: ${calculateSumOfDigits(405)}`);
