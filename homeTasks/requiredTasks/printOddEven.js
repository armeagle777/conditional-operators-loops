//TODO: 1. Given a number. Print 'odd' if the number is odd and 'even' if it's even.

function printOddEven(inputNumber){
    const printText = inputNumber % 2 === 0 ? 'even' : 'odd';
    return printText;
}

//? Testing numbers 125, 35, 20

console.log(`output for 125 : ${printOddEven(125)}`);
console.log(`output for 35 : ${printOddEven(35)}`);
console.log(`output for 20 : ${printOddEven(20)}`);