const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let disk = (Math.pow(2, disksNumber)) - 1;
  let sec = 3600 / turnsSpeed * disk;
  return {
    turns: disk,
    seconds: Math.floor(sec)
  };
};
