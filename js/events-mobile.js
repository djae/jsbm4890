'use strict';

window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log('Red Box: touchstart');
        console.log(e.target);
        console.log(e.touches[0].target);
        console.log(e.touches); // регистрация всех (пальцев)
        console.log(e.changedTouches); // список всех взаимодействующих (пальцев)
        console.log(e.targetTouches); // писок всех взаимодействующих (пальцев)с конкретным елементом
    });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log('Red Box: touchmove' + e.touches[0].pageX);
    });

/*     box.addEventListener('touchend', function (e) {
        e.preventDefault();
        console.log('Red Box: touchend');
    }); */
});




//console.log(box);