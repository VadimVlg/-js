const isPerfect = (num) => {
    const compute = (x) => {
      let result = 0;
      for (let i = 1; i < x; i += 1) {
        if (x % i === 0) {
          result += i;
        }
      }
      return result;
    };
    if (num > 0) {
      if (num === compute(num)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };