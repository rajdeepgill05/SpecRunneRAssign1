const positiveSum = (numbers) => {
    let sum = 0;
      
      for(const number of numbers) {
          if(number > 0){
              sum += number;
          }
      }
      
    return sum;
  }

  const isDivisible = (number, divisorA, divisorB) => number % divisorB === 0 && number % divisorA === 0