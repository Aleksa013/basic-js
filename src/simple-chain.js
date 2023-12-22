const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  chain:{},
  getLength() {  
  return Object.keys(this.chain).length;
  },
  addLink(value) {  
    if(typeof value == 'number'){
      value = value.toString();
    }
    if(typeof value !== 'number'){
      value = `${value}`;
    }
    if(value.isEmpty){
      value = ' ';
    }
  this.chain[this.getLength()] =  value.toString();  
  return chainMaker;
  },
  removeLink( position ) {   
  if(typeof position == 'number' && position > 0 && position <= this.getLength()){
  delete this.chain[`${position-1}`] ;
  this.chain = Object.assign({},Object.values(this.chain))
  return chainMaker;
  }else{
    for(let i = this.getLength()-1; i >=0; i--){
      delete this.chain[`${i}`];
      }
    throw new Error ("You can't remove incorrect link!")
  }
  },
  reverseChain() {
  this.chain = Object.assign({},Object.values(this.chain).reverse());
  return chainMaker;
  },
  finishChain() {
   let finish='';
   for(let i = 0; i < this.getLength(); i++){
    if(i == this.getLength()-1){
      finish += `( ${this.chain[i]} )`
    }else{
      finish += `( ${this.chain[i]} )~~`
    }
   }
   for(let i = this.getLength()-1; i >=0; i--){
    delete this.chain[`${i}`];
    }

    return finish;
  }
};

module.exports = {
  chainMaker
};
