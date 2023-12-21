const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function activity(arr,strArr){
const str = strArr.shift();
let indexStr = arr.indexOf(str);
let answer;
if(indexStr < 0){
  answer = arr ;
}
let double;
let res1 = arr.slice(0,indexStr);
let res2 = arr.slice(indexStr,arr.length);
if(str == '--double-next' && indexStr ==arr.length-1){
  res2.splice(0,1);
}
if(str == '--double-next' && indexStr < arr.length-1){
res2.splice(0,1);
double = res2.shift();
res1.push(double);
res2.unshift(double);
}
if(str == '--double-prev'&& indexStr == 0){
  res2.splice(0,1);
}
if(str == '--double-prev'&& indexStr > 0){
 res2.splice(0,1);
 double = res1.pop();
 res1.push(double);
 res2.unshift(double);
}
if(str == '--discard-next'){
 res2.splice(0,2);
}
if(str == '--discard-prev'){
  res2.splice(0,1);
  res1.pop();
}
if(strArr.length == 0){
 return answer = res1.concat(res2);
}else{
 return answer = res1.concat(activity(res2, strArr));
}

}


function transform( arr ) {
  let res; 
  if(arr instanceof Array){
    const strings = arr.filter(x=>  typeof(x) =='string');
  if(arr.length == 0 || strings.length == 0){
    res = arr;
  }
  if(strings.length > 0){
    res = activity(arr, strings);
  }  
  }else{
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 
  return res;
}

module.exports = {
  transform
};

