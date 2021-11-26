import { opcodes, variable, list } from '../misc/handleimports.js';

let myVariable = Object.create(variable);
console.log(myVariable.sliderPos);
myVariable.sliderPos = 500;
let myVar2 = Object.create(variable);
console.log(myVar2.sliderPos);
