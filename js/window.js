
'use strict';

let box = document.querySelector('.box');

let width = box.clientWidth;
let heigth = box.clientHeight;

let widthOffset = box.offsetWidth;
let heigthOffset = box.offsetHeight;

let widthScroll = box.scrollWidth;
let heigthScroll = box.scrollHeight;

console.log(width);
console.log(heigth);

console.log(widthOffset);
console.log(heigthOffset);

console.log(widthScroll);
console.log(heigthScroll);

let btn = document.querySelector('button');

btn.addEventListener('click', function(){

    //box.style.height= box.scrollHeight + 'px';
    box.style.color = 'red';
    //console.log(box.scrollTop);
    box.scrollTop = 0;
});
console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientHeight); 
console.log(document.documentElement.clientWidth);

document.documentElement.scrollTop = 0; // для пеерхода вверх страницы - часто используется

//scrollBy(x,y); // переместить относительно текущего положения
scrollTo(0,200); // переход веонкретные координаты