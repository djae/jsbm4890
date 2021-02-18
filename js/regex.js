'use strict';

let ans = prompt('Enter your name', '');
let reg = /n/ig; // shows the position of a in the line

console.log(ans.search(reg)); // search (поиск) всегда ищет только первое вхождение
console.log(ans.match(reg)); // match (совпадение)
console.log(reg.test(ans)); // тест (проверка) входит или нет вернет true or false

console.log(ans.replace(/./g,'*'));// . - все символы не зависимо от регистра заменить на *
console.log('12-13-14'.replace(/-/g,':')); // замена всех - на :


/** классы
* \d - цифры \D - не цифры
* \w - буквы \W - не буквы
* \s - пробелы \S - не пробелы
* экранирование спецсимволоа обратный слеш - \
 */

console.log(ans.match(/\d/g)); // все цифры

let str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i)) // совпадение с комбинацией буква-цифра-буква-цифра без регистра
