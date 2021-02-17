/* let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li"); */
    let ul = document.querySelector('.menu'),
    arrLI = document.querySelectorAll('li');

//menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента
ul.insertBefore(arrLI[2],arrLI[1]);

/* menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);   */                                 
let li = arrLI[1].cloneNode(true);
li.textContent = 'Пятый элемент';
ul.appendChild(li);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

//title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';

//adv.remove();                                                   // Удалить рекламу со страницы
document.querySelector('.adv').remove();

/* let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion; */
let input = prompt('Dfit отношение к технике apple', '');
document.getElementById('prompt').textContent = input;





