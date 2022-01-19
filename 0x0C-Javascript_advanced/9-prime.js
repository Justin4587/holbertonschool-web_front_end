

function countPrimeNumbers () {
  var primeCount = 0;
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  return primeCount;
}


function isPrime(num) {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
}

let start = performance.now();
const primeTotal = countPrimeNumbers();
let end = performance.now();
console.log("Execution time of printing countPrimeNumbers was", end - start, "milliseconds.");
/**
 *   start.toFixed(7);
 *   console.log(start, end, primeTotal);
 * 
 */
