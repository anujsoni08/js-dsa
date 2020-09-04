const repeatedNumber = function (A) {
  let stack = {};

  let duplicate = -1;

  for(let i=0;i<A.length;i++){
    if (stack[A[i]] === 1) {
        stack[A[i]]++;
        duplicate = A[i];
        break;
    } else {
      stack[A[i]] = 1;
    }
  };
  return duplicate;
};

module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let max = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        if (i !== j) {
          let absValue = Math.abs(A[i] - A[j]) + Math.abs(i - j);
          if (max < absValue) {
            max = absValue;
          }
        }
      }
    }
    return max;
  },
};
   