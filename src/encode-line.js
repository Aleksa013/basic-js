const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const set = new Set(str);
  const arr = str.split('');
  console.log(set)
  let res = '';
for(const letter of set){
  const filteredArr = arr.filter(x => x == letter);
 if( filteredArr.length > 1) {
  res += filteredArr.length + letter
 }else{
  res +=  letter
 }

  
}
 return res;
}





module.exports = {
  encodeLine
};
