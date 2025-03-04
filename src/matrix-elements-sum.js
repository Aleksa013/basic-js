const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
let sum = 0;
let column = matrix[0].length;
sum =  matrix[0].reduce((sum,b ) => sum+b, 0);
for(let i = 0; i < column; i++){
  for(let j = 0; j < matrix.length; j++){
    let add;
    if ( matrix[j][i] == 0){
       add = 0;      
    }
    if(matrix[j][i] !== 0 && j < matrix.length-1){
      let num = j + 1;
       add = matrix[num][i];   
       sum += add;     
        console.log(sum,add,  j)
      }else{
        console.log(sum, j)
      }
    }  
  }
return sum;
}

module.exports = {
  getMatrixElementsSum
};
