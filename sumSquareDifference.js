const sumSquareDifference = (n) => {
    const sumSquare = (x) => {
      let result = 0;
      for (let i = x; i > 0; i -= 1) {
        result += i ** 2;
      }
      return result;
    };
  
    const squareSum = (x) => {
      let result = 0;
      for (let i = x; i > 0; i -= 1) {
        result += i;
      }
      return result ** 2;
    };
    const difference = squareSum(n) - sumSquare(n);
    return difference;
  };