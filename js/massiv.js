"use strict";

/* ---- array iterate ---- */
let arr = [1, "two", 3, "four", 5];

// var 1 use for
/* for (let i=0; i<arr.length;i++){
    console.log(arr[i]);
} */

//var 2 use callback
/* arr.forEach(function (item, i, array) {
    console.log(i + ": " + item + "-(" + array + ")");
});
 */
//var 3 show array key or value

/* for (let key in arr){
    console.log(key);
} */

/* for (let value of arr) {
    console.log(value);
} */

/* ---- string(input) to array ----- */
let input = prompt("", ""),
    arrIn = [];
arrIn = input.split(",");

console.log(arrIn);

/* ---- array to string ----- */
let arrStr = ["one", "two", "three"],
    str = arrStr.join("-");

console.log(str);

/* ---- sorting an array----- */
// v 1
let numArray = [140000, 104, 99];
numArray = numArray.sort((a,b) => a-b);
console.log(numArray);
// v 2
let myArray = [104, 140000, 99];
myArray.sort(function(a, b){
  return b - a;
});
console.log(myArray); 
