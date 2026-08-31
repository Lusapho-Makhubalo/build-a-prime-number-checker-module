function isPrime(number) {
  if (number <= 1) return false;          // 0, 1 and negatives are not prime
  if (number === 2) return true;          // 2 is the only even prime
  if (number % 2 === 0) return false;     // all other even numbers are not prime

  // check odd divisors up to √number
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

// 4 is not prime → false
console.log(isPrime(4));  // false

// 5 is prime → true
console.log(isPrime(5));  // true

module.exports = {
  isPrime
};
