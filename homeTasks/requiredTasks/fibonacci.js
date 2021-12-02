//TODO: Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
//TODO:  ak-1 + ak-2)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

//? Testing function with numbers 0, 2, 10, 20
console.log(`Incase of n = 0, the output will be : ${fibonacci(0)}`);
console.log(`Incase of n = 2, the output will be : ${fibonacci(2)}`);
console.log(`Incase of n = 10, the output will be : ${fibonacci(10)}`);
console.log(`Incase of n = 20, the output will be : ${fibonacci(20)}`);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
