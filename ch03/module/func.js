//const value = require('./var');
const { odd, even } = require("./Var"); //구조분해 할당
//import { odd, even } from './var';

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;
//한가지만 만들고 싶을떄는 module.exports를 쓰자
