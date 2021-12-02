//TODO: Given three numbers. Sort them by the ascending order.

function orderAsc(numOne, numTwo, numThree) {
  let arrayFromNumbers = [numOne, numTwo, numThree];
  const sortedArray = arrayFromNumbers.sort((elOne, elTwo) => {
    return elOne - elTwo;
  });

  return [sortedArray].join();
}

console.log(orderAsc(-23, -456, 0));

//? Testing collections (45 , 26, 78), (-23, -456, 0)
console.log(`In case of (45 , 26, 78) : ${orderAsc(45, 26, 78)}`);
console.log(`In case of (-23, -456, 0) : ${orderAsc(-23, -456, 0)}`);
