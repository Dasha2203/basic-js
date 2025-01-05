const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  let res = [];

  res = arr.filter((el, idx) => {
    if (el === -1) {
      indexes.push(idx);
    }

    return el !== -1;
  }).sort((a, b) => {
    return a - b;
  });

  indexes.forEach((el) => {
    res.splice(el, 0, -1);
  })

  return res
}

module.exports = {
  sortByHeight
};
