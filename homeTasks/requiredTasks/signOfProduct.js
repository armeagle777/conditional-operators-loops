//TODO: Find the sign of product of three numbers without multiplication operator. Display the specified sign.
function findSignOfProduct(numberOne, numberTwo, numberThree) {
  let minusSignCount = 0;
  if (numberOne === 0 || numberTwo === 0 || numberThree === 0) {
    return 'unsigned';
  }
  let arrayFromParams = [numberOne, numberTwo, numberThree];
  for (let num of arrayFromParams) {
    if (num < 0) {
      minusSignCount++;
    }
  }
  return minusSignCount % 2 ? '-' : '+';
}

//? Testing number collections (-14, 5, 0), (-8, 9, -6), (4, 19, -2)
console.log(`In case of (-14, 5, 0): ${findSignOfProduct(-14, 5, 0)}`);
console.log(`In case of (-8, 9, -6): ${findSignOfProduct(-8, 9, -6)}`);
console.log(`In case of (4, 19, -2): ${findSignOfProduct(4, 19, -2)}`);
