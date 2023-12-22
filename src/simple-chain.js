const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  getLength() {  
  this.length =  Object.keys(chainMaker).length-6;
  return this.length
  },
  addLink(value) {  
//  console.log(this.getLength());
  this[this.getLength()] =  value.toString();
  return chainMaker;
  // this = `${this.value}`; 
  // console.log(chainMaker[`${this.getLength()}`])
  },
  removeLink( position ) { 
  this.position = position.toString();  
  delete this.position;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
   let finish='';
   for(let i = 0; i < this.getLength(); i++){
    finish += `( ${this[i]} )~~`
   }
    return finish;
  }
};
chainMaker.getLength();
chainMaker.addLink(12);
console.log(chainMaker)
// // chainMaker.addLink(1);
// // chainMaker.getLength();
// // chainMaker.removeLink(2);
// chainMaker.finishChain();
console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())

module.exports = {
  chainMaker
};
