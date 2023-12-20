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
console.log('sum', sum)
for(let i = 0; i < column; i++){
  for(let j = 0; j < matrix.length; j++){
    let add;
    console.log(matrix[j][i], 'j=' , j, 'i=', i)
    if ( matrix[j][i] == 0){
       add = 0;
      console.log( matrix[j][i])
      console.log(sum,add, j)
      
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
matrix = [
  [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
   ]
console.log(getMatrixElementsSum( matrix ) )

// function getMatrixElementsSum( matrix ) {
//   let sum = 0;
//   let column = matrix[0].length;
//   sum =  matrix[0].reduce((sum,b ) => sum+b, 0);
//   console.log('sum', sum)
//   for (let i = 0; i < column; i++){  
//     for (let k = 1; k < matrix.length;k++){
//       let num = k;
//       if(matrix[num][i] == 0){
//         sum += 0;
//         console.log(sum , 'if 0',k)
//       }
//       if(matrix[num][i] !== 0){  
//         if(num++ >= matrix.length){
//           break;
//          } 
//          num--;
//         sum+=matrix[num++][i];
//         console.log(sum ,'if not 0 and exist', num, k)
//       }   
//      console.log(sum)
//     }
//   }
//   return sum;
//   }
module.exports = {
  getMatrixElementsSum
};
