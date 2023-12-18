const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  let answer;
 
 if (date instanceof Date){
  const numberMonth = +date.toJSON().slice(5,7);   
 const winter = [1,2,12];
 const spring = [3,4,5];
 const summer = [6,7,8];
 const fall = [9,10,11];
  if(numberMonth){
   if(winter.includes(numberMonth)){
    answer = 'winter'
   }
  if(spring.includes(numberMonth)){
    answer = 'spring'
  }
  if(summer.includes(numberMonth)){
    answer = 'summer'
  }
  if(fall.includes(numberMonth)){
    answer = 'fall'
  } 
  } 
}else if(!date){
  answer = 'Unable to determine the time of year!';
}else if(isNaN(Date.parse(date))){
  answer ='Invalid date!';
}else{
  answer =false
}
return answer

}


console.log(getSeason('foo'))
console.log( getSeason({ John: 'Smith' }))
console.log(getSeason(20192701))
console.log(getSeason([2019, '27', 0 + '1']))
console.log(getSeason(() => new Date()));



module.exports = {
  getSeason
};
