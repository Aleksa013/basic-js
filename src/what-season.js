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
  throw new NotImplementedError('Not implemented');
  const daysOfMonths = [ 'Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 
  const numberMonth = +date.toJSON().slice(5,7)-1;
  const nameMonth = date.toString().slice(4,7);
  let answer;
 
  if(daysOfMonths[numberMonth] == nameMonth){
   if(nameMonth == 'Jan'||nameMonth =='Feb'||nameMonth =='Dec'){
    answer = 'winter'
   }
  if(nameMonth == 'Mar'||nameMonth =='Apr'||nameMonth =='May'){
    answer = 'spring'
  }
  if(nameMonth == 'Jun'|| nameMonth =='Jul'||nameMonth =='Aug'){
    answer = 'summer'
  }
  if(nameMonth == 'Sep'|| nameMonth =='Oct'||nameMonth =='Nov'){
    answer = 'fall'
  }
    
  } else if(!data) {
    answer = 'Unable to determine the time of year!'
  }else{
    answer ='Invalid date!'
  }
return answer
}




  




module.exports = {
  getSeason
};
