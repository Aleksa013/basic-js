const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
   
  return Object.keys(chainMaker).length;
  },
  addLink( value ) {
    
  this.position = this.getLength+1;
  this.value= `(${value})`;
  },
  removeLink( position ) {
   
  delete this.position;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};



module.exports = {
  chainMaker
};
