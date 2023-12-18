const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+',
addition = '', additionRepeatTimes=1, additionSeparator='|'} ) {
  let res= '';
  let additionRes = '';
  for(let i =0; i < additionRepeatTimes; i++){
    i !== additionRepeatTimes-1?
      additionRes += addition + additionSeparator:
      additionRes += addition
   }
 for(let k =0; k < repeatTimes; k++){
 if (k == repeatTimes-1){
  res += str + additionRes
 }else{ 
  res += str + additionRes +separator
 } 
}
return res;
}
module.exports = {
  repeater
};
