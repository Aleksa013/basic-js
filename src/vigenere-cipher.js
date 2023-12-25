const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }else{
  const numberKeys = [];
  const crypt = [];
  const arrMessage =[];
  const reg = /[.,!?:()@#$&% ^*|\-\/]/;
  key.toLowerCase().split('').forEach(letter=>{
  numberKeys.push(alphabet.indexOf(letter))
  })
//  console.log(numberKeys)
   message.toLowerCase().split('').forEach((letter)=>{
    reg.test(letter)||!isNaN(Number(letter))?
    arrMessage.push(letter): 
   arrMessage.push(alphabet.indexOf(letter))
  });
  // console.log(arrMessage)
  let numberKey = 0;
  for(let i=0; i < arrMessage.length; i++){    
    if(numberKey >= numberKeys.length){
      numberKey = 0;
    }
    if(arrMessage[i] == -1){
      crypt.push(' ');
   
    }else if(reg.test(arrMessage[i])||!isNaN(Number(message.split('')[i]))){
      crypt.push(arrMessage[i]);
      numberKey--;
    }else{
      const numberCodeLetter = arrMessage[i]+numberKeys[numberKey];
      numberCodeLetter > alphabet.length-1 ?
      crypt.push(alphabet[numberCodeLetter-(alphabet.length)]):
      crypt.push(alphabet[numberCodeLetter])
     
    }  
    numberKey++;
  }  
  return  this.reverse?
          crypt.join('').toUpperCase():
          crypt.reverse().join('').toUpperCase();
          
  }
  }


  decrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }else{
    const numberKeys = [];
    const decrypt = [];
    const arrMessage =[];
    const reg = /[.,!?:()@$#&% ^*|\-\/]/;
    key.toLowerCase().split('').forEach(letter=>{
    numberKeys.push(alphabet.indexOf(letter))
    })
    message.toLowerCase().split('').forEach((letter)=>{
      reg.test(letter)||!isNaN(Number(letter))?
      arrMessage.push(letter): 
     arrMessage.push(alphabet.indexOf(letter))
    });
    let numberKey = 0;
    for(let i=0; i < arrMessage.length; i++){    
      if(numberKey >= numberKeys.length){
        numberKey = 0;
      }
      if(arrMessage[i] == -1){
        decrypt.push(' ');
        numberKey--;
      }else if(reg.test(arrMessage[i])||!isNaN(Number(message.split('')[i]))){
        decrypt.push(arrMessage[i]);
        numberKey--;
      }else{
        const numberCodeLetter = arrMessage[i]-numberKeys[numberKey];
        numberCodeLetter < 0 ?
        decrypt.push(alphabet.at(numberCodeLetter)):
        decrypt.push(alphabet[numberCodeLetter])
      }  
      numberKey++;
    }    
    return this.reverse ?
    decrypt.join('').toUpperCase():
    decrypt.reverse().join('').toUpperCase();
    }
  }
}
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) 

module.exports = {
  VigenereCipheringMachine
};
