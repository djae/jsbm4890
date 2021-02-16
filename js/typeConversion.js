'use strict';

// --- to String ---
console.log(typeof(String(null))); 
console.log(typeof('' + 5)); 

// --- to Number ---
console.log(typeof(Number(null))); 
console.log(typeof(+'12')); 
console.log(typeof(5 + +'12')); 
console.log(typeof(parseInt('10px',10))); 
//let input = +prompt('Hi?','');

// --- to Boolean ---
let switcher = null;
if(!switcher){
    console.log('false' - switcher);
}

console.log(typeof(Boolean('12'))); 
console.log(typeof(!!('12'))); 

/* let arrFalse = [0,'',null, undefined, NaN, 'true'];
for (let value of arrFalse) {
    let res = (value) ? value : console.log('false -' + value);
    console.log(res);
} */