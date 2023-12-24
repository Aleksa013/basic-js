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
const rows = matrix.length;
const cols = matrix[0].length;
const mines= [];
for(let i = 0; i < rows; i++){
  mines.push(Array())
  for(let j = 0; j < cols; j++){
if(matrix[i][j] == true){
mines[i].push(true);
}else{
  mines[i].push(0);
}
} 
}
for(let i = 0; i < rows; i++){
 for(let j = 0; j < cols; j++){
if(matrix[i][j] == true ){
  let num = j;
  mines[i][num+1]+= 1 ;
}
 }
  }
  for(let i = 0; i < rows; i++){
    for(let j = cols-1; j >= 0; j--){
   if(matrix[i][j] == true && j > 0){
    let num = j;
    mines[i][num-1]+= 1 ;
  }
  }
  }
  for(let i = 0; i < cols; i++){
    for(let j = rows-1; j >= 0; j--){
    if(matrix[j][i] == true && j > 0){
    let num = j;
    mines[num-1][i]+= 1 ;     
  }
  }
  }
  for(let i = 0; i < cols; i++){
  for(let j = 0; j < rows; j++){
  if(matrix[j][i] == true ){
  let num = j;
  mines[num+1][i]+= 1 ;     
    }
    }
  }
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++)
    if(matrix[i][j] == true ){
      let num = i;
      let numb = j;
      mines[num+1][numb+1] == true?
      mines[num+1][numb+1]:
      mines[num+1][numb+1]+= 1 ;
    }
  }
  for(let i = rows-1; i >= 0; i--){
    for(let j = cols-1; j >=0 ; j--)
    if(matrix[i][j] == true && i > 0 && j >0){
      let num = i;
      let numb = j;
      mines[num-1][numb-1] == true?
      mines[num-1][numb-1]:
      mines[num-1][numb-1]+= 1 ;
    }
  }
  for(let i = rows-1; i >= 0; i--){
    for(let j = 0; j < cols; j++){
      if(matrix[i][j] == true && i > 0){
        let numb = j;
        let num = i;
        mines[num-1][numb+1] == true?
        mines[num-1][numb+1]:
        mines[num-1][numb+1]+= 1 ;
    }   
  }
 }
 for(let i = cols-1; i >= 0; i--){
  for(let j = 0; j < rows; j++){
    if(matrix[j][i] == true && i > 0){
      let num = i;
      let numb =j;
      mines[numb+1][num-1] == true?
      mines[numb+1][num-1]:
      mines[numb+1][num-1]+= 1 ;
  }
}   
}
for(let i = 0; i < rows; i++){
  for(let j = 0; j < cols; j++){
 if(matrix[i][j] == true){
    mines[i].splice(j, 1, 1) 
}
} 
}
return mines;
}

module.exports = {
  minesweeper
};
