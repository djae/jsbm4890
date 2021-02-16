
'use strict';

function hi() {
    console.log('hi');  
}

let numArray = [140000, 104, 99];
numArray = numArray.sort((a,b) => a-b);



function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

hi();

console.log(numArray);

first();

second();