const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

// const matrixMines = [];
// const cols = matrix[0].length;
// const rows = matrix.length;

// for(let i =0; i < rows; i++){
//   matrixMines.push(Array())
//   for(let j = 0; j < cols; j++){
//     if(matrix[i][j]){
//       matrixMines[i].push( 1 );
//     }else{
//       matrixMines[i].push( 0 );
//     }
//   }
// }
// for(let k =0; k < rows; k++){
//   for(let m = 0; m < cols; m++){
//     if(matrixMines[k][m] == 1){
//       matrix[k][m]=1;
//      if(k-- > 0 || k-- == 0){
//       matrix[k--][m] += 1;
//      }
//      if(k++ < rows || k++ == 0){
//       matrix[k++][m] += 1;
//      }
//      if(m++ < cols || m++ == 0){
//       matrix[k][m++] += 1;
//      }
//      if(m-- > 0|| m-- == 0){
//       matrix[k--][m] += 1;
//      }
//     }
//   }
// }


}
 matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ]
console.log(minesweeper(matrix))
module.exports = {
  minesweeper
};
