//TODO: Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

function isNumberPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? 'yes' : 'no';
}

//? Testing numbers 401, 63
console.log(`In case of 401 the output will be : ${isNumberPrime(401)}`);
console.log(`In case of 63 the output will be : ${isNumberPrime(63)}`);
