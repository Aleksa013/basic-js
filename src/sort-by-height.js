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
function sortByHeight( arr ) {
const res = arr.filter(x => x > 0).sort((a,b) => a - b);
const indexes = [];
arr.forEach((a, index) =>{
 a > 0?
 a:
 indexes.push(index)
})
indexes.forEach(ind => {
 res.splice(ind, 0, -1)
})
return res;
}



module.exports = {
  sortByHeight
};
