console.log([] + false - null + true ); // NaN

let y = 1; 
let x = y = 2; 
console.log(x); // 2

console.log([ ] + 1 + 2); // 12

console.log( "1"[0]); //1

let a = 2 && null && 'str' && undefined;
console.log(a); // null


/**
 * Есть ли разница между выражениями !!( a && b ) и (a && b)?
 * !!( a && b ) и (a && b) - разница в типе второе от его зависит
 */

 /** 
* Оператор || возвращает первый из операндов, значение которого может быть приведено к логическому true
* Оператор && возвращает первый из операндов, значение которого приводится к логическому false
* или
* true || (anything) короткое замыкание дающее true.
* false && (anything) короткое вычисление дающее false.
*/

console.log('foo' || false); // 'foo'
console.log(null || 'bar'); // 'bar'
console.log(false || 1); // 1
console.log(false || null); // null

console.log(true && []); // []
console.log(null && 'foo'); // null
console.log(0 && 'foo'); // 0
console.log('foo' && 'bar'); // 'bar'

console.log( null || 2 && 3 || 4 ); // 3
console.log( null || 2 ); // 2
console.log(  2 && 3  ); // 3
console.log( 3 || 4 );// 3


/* два экземпляра объекта никогда не будут равны, даже если они содержат одни и те же данные на данный момент */
let a1 = [1, 2, 3],
    b = [1, 2, 3];
console.log (a1 == b); 

/*Изначальное значение Infinity равно Number.POSITIVE_INFINITY. Оно больше, чем любое число, включая само себя.*/
console.log (+Infinity); //Infinity