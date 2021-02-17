let ul = document.querySelector('.menu');
let arrLI = document.querySelectorAll('li');
// 1
ul.insertBefore(arrLI[2],arrLI[1]);
// 2
let li = arrLI[1].cloneNode(true);
li.textContent = 'Пятый элемент';
ul.appendChild(li);
// 3
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';
// 4
document.querySelector('.adv').remove();
// 5
let input = prompt('Dfit отношение к технике apple', '');
// 6
document.getElementById('prompt').textContent = input;

console.log(li);



