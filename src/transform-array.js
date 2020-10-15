const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if (!Array.isArray(arr)) {
    throw new Error("It is not an array");
  } else {
    let transformArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++;
        continue;
      } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
        transformArray.pop();
        i++;
      } else if (arr[i] === '--double-next') {
        if ((i + 2) < arr.length) {
          transformArray.push(arr[i + 1]);
        };
        i++;
      } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
        if ((i - 1) >= 0) {
          transformArray.push(arr[i - 1]);
        };
        i++
      };
      if (arr[i] !== undefined && arr[i] !== "--double-prev" 
          && arr[i] !== "--double-next" && arr[i] !== "--discard-prev" &&
          arr[i] !== "--discard-next" ) {
        transformArray.push(arr[i]);
      };
      
    }
    return transformArray;
  }
};
