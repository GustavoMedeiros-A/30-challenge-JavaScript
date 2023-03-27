function primeNumbers(num) {
    let primeNumberArray = []
    for (var i = 0; i <= num; i++) {
      if (isPrime(i)){
        primeNumberArray.push(i);
      }
    }
    return primeNumberArray;
  }
  function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }

  function sumArray() {
    let sum = 0
    let arraySum = primeNumbers(1000)
    for(let i = 0; i < arraySum.length; i++) {
        sum += arraySum[i]
    }
    return sum
  }
  console.log(sumArray());