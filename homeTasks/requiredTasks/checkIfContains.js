//TODO: Insert a digit and a number. Check whether the digits contains in the number or not.

function numberContains(digit, num) {
  return num.toString().includes(digit) ? 'yes' : 'no';
}

//? Testing pairs (5, 2463), (4, 6), (8, 45689)

console.log(
  `In case of (5, 2463) the output will be: ${numberContains(5, 2463)}`
);
console.log(`In case of (4, 6) the output will be: ${numberContains(4, 6)}`);
console.log(
  `In case of (8, 45689) the output will be: ${numberContains(8, 45689)}`
);
