const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
 let res = 0;
 for(let i = 0; i < n.toString().length; i++){
  let str ='';
    n.toString().split('').forEach((item, index )=>{
      index!== i?
      str += item:
      str;      
    }) 
    Number(str) > res?
    res = Number(str):
    res;   
   }
 return res;
}

module.exports = {
  deleteDigit
};
