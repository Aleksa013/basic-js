const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */



function getCommonCharacterCount(s1, s2 ) {
  throw new NotImplementedError('Not implemented');
  let count = '';
const arr = s1.split('');
const arr2 = s2.split('');
arr.forEach(item =>{
  if(arr2.includes(item)){
    const index = arr2.indexOf(item);
    count += item;
    arr2.splice(index,1)
  }
})

return count.length;
}

module.exports = {
  getCommonCharacterCount
};
