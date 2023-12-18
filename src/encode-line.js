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
let res = '';
let arr = str.split('');
let num = 1;
arr.forEach((letter, index) =>{  
  console.log( arr[index++],num)
  if(arr[index++] == letter){
    num++;
  }else{
    num == 1?
    res += letter:
    res += num+letter;
    num=1;
  }
})
 return res;
}





module.exports = {
  encodeLine
};
