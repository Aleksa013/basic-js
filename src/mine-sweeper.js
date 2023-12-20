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
const matrixMines = [];
const cols = matrix[0].length;
for(let i = 0; i < matrix.length; i++){
  const itemMatrix = [];
  for(let c = 0; c < cols; c++){
    itemMatrix.push(0)
  }
  matrixMines.push(itemMatrix);
  console.log(matrixMines, 'zeros')
  for(let j=0; j < cols; j++){
    if(matrix[i][j]){
      let num = j;
      console.log(num, 'num')
      matrixMines[i][j]=1;
      console.log(j,'j')
      num++;
      matrixMines[i][num] = 1;
      console.log(num, 'num++')
      console.log(matrixMines, 'matrix right', j)
    }  
    if(matrix[j][i]){
      matrixMines[j][i]=1;
      matrixMines[j][i++]=1;
      i--;
      console.log(matrixMines, 'matrix down', i)
    }
  }
  for(let l=cols-1; l >= 0; l--){
    if(matrix[i][l]){
      matrixMines[i][l]=1;
      matrixMines[i][l--]=1;
      l++;
      console.log(matrixMines, 'matrix left', l)
    }
     
  }
  for(let v=matrix.length-1; v >=0 ; v--){
    if(matrix[v][cols-i]){
      matrixMines[v][cols-i]=1;
      matrixMines[v][cols-i++]=1;
      cols+i
      console.log(matrixMines, 'matrix top', v)
    }
  }
 
}
return matrixMines
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
