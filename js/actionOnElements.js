'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/* for (let i=0; i < heart.length; i++){
    heart[i].style.backgroundColor = 'purple';
}
 */

/* heart.forEach(function (item, i, arr) {
    item.style.backgroundColor = 'darkblue';
}); */

let div = document.createElement('div'),
    text = document.createTextNode('вставим текст');

div.classList.add('black');
/* div.innerHTML = '<h3>text</h3>'; */
div.textContent = 'text++';
//document.body.appendChild(div);
//wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[0]);
document.body.replaceChild(btn[1],circle[1]);

console.log(text);