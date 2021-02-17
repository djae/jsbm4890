'use strict';

let btn = document.getElementsByTagName('button');

// так обрабатывать события неправильно
btn[1].onclick = function () {
    alert('нажал 1, но так писать тоже не верно!');
};

btn[1].onclick = function () {
    alert('нажал 1, еще раз и так писать тоже не верно!!'); // первое не сработает в таком случае
};


// так обрабатывать события правильно
btn[2].addEventListener('click', function () {
    alert('нажал 2, ОК! так верно обработан click');
});

btn[2].addEventListener('click', function () {
    alert('нажал 2, еще раз  верно обработан click!!');
});


btn[3].addEventListener('mouseenter', function () {
    alert('mouseenter - ты навел на 3-ю кнопку!!');
});

// --- добавим EVENT (или E) в функцию обработки события ----
btn[4].addEventListener('click', function (e) {
    console.log('Произошло - ' + e.type + ' на элементе ' + e.target); //get info about event !!!!
});

btn[5].addEventListener('click', function (e) {
    let target = e.target;
    target.style.display = 'none'; // hidden
});

btn[6].addEventListener('click', function (e) {
    console.log(e.target);
});

// всплытие события 
let wrapper = document.querySelector('.wrapper');
btn[7].addEventListener('click', function (e) {
    console.log('Произошло - ' + e.type + ' на элементе ' + e.target); // отработалв кнопка !!!!
});

wrapper.addEventListener('click', function (e) {
    console.log('Произошло - ' + e.type + ' на элементе ' + e.target); //отработал родитель кнопки (событие всплыло) !!!!
});

//отмена стандартного поведения браузера
let link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Произошло - ' + event.type + ' на элементе ' + event.target);
});

//повесим обработчик на все кнопки (уход мыши)
let btnArr = document.querySelectorAll('button');
btnArr.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        console.log('мышь ушла с  - ' + e.type + ' на элементе ' + e.target);
    });
});