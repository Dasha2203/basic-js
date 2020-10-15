const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeatStr = '';
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      repeatStr += String(str);
      if (options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          repeatStr += String(options.addition);
          if (!options.additionSeparator && j != options.additionRepeatTimes-1) {
            repeatStr += '|'
          } else if(options.additionSeparator && j != options.additionRepeatTimes-1){
            repeatStr +=options.additionSeparator
          }
        }
      }

      if (!options.separator && i != options.repeatTimes-1) {
        repeatStr += '+'
      } else if (options.separator && i != options.repeatTimes-1) {
        repeatStr += options.separator
      }
      
    }
  }

  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    repeatStr += str + String(options.addition)
  }
  
  return repeatStr;
};
  