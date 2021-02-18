'use strict';

//setTimeout(sayHello, 3000);
/* let timerId = setTimeout(sayHello, 3000); // задержка
clearTimeout(timerId); //stop timeout
function sayHello() {
    alert('Hello!');
} */

/* let timerId2 = setInterval(sayHello, 3000); // повтор с интервалом не сработает если внутренняя выполняется длольше
function sayHello() {
    console.log('Hello!');
} */

/** --- рекурсивный вызов задержки ---- */
/* setInterval не сработает если внутренняя выполняется дольше - рекурсия это исправляет*/
/* let timerId2 = setTimeout(function log() {
    console.log('this a log');
    setTimeout(log,5000);
}); */

/** animate 1 */
/* обычно для анимаций использют CSS а JS лишь добавляет определенный клвсс элементу */

let btn = document.querySelector('button'),
    box = document.querySelector('.box');

function myAnimation() {

    let pos = 0; // start position
    let id = setInterval(frame, 10); //frame time
    function frame() {
        if (pos == 300) {
            clearInterval(id); //stop 
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation); //start animate

/** делегирование 2 */

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (e) {
    // проверка что кнопка нажата и нажата только одна из кнопок блока (btn-blok) и нажато не мимо кнопки 
/*     if(e.target && e.target.tagName == 'BUTTON'){
        console.log ('нажато');
    } */
// проверка что кнопка нажата и нажата только кнопка блока (btn-blok) с кассом first
/*     if(e.target && e.target.classList.contains('first')){
        console.log ('нажато');
    } */
// находим конкретный элемент
    if(e.target && e.target.matches('button.first')){
        console.log ('нажато');
    }

});