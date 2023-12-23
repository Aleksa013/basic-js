const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    const depths = [];
    const fileterArr = arr.filter(a => Array.isArray(a));
    console.log(fileterArr);
    if(fileterArr.length > 0 ){
      // fileterArr.forEach(array =>{
      //   depths.push(depth+ Math.max(0,this.calculateDepth(array)))
      //   console.log(this.calculateDepth(array))      
      //   })
          // return Math.max(depths);
    depths.push (depth + ...fileterArr.map()this.calculateDepth));
    console.log(depths)
    }else{
     return depth;
    }
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3,   [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))

module.exports = {
  DepthCalculator
};
