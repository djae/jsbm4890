'use strict';

console.log(typeof('1')); //string  - 1
console.log(typeof(1)); //number - 2
console.log(typeof(false)); //boolean -3 
let n = null;
console.log(typeof(n)); //null - 4 return {object}
let a;
console.log(typeof(a)); //undefined- 5
let b = {};
console.log(typeof(b)); //object - 6
let id = Symbol('id');
console.log(typeof(id)); //symbol - 7

// dop
console.log(Number.isNaN(true)); //NaN - Not-A-Number
