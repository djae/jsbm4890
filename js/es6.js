/* 'use strict'; */

let name = 'alex',
    age = '20',
    mail = 'as@as.as';

/** t3.9 ES6 interpolation  */
document.write('Пользователю ' + name + ' ' + age + 'лет'); //old version
document.write(`Пользователю ${name} ${age} лет`); // ES6 interpolation 

/** t3.10 ES6 let, const  */
function makeArray() {
    var items = [];

    //   for (var i=0; i<10;i++){ // var одна на весь цикл
    for (let i = 0; i < 10; i++) { // let в каждой итерации создается заново
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}
var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();

/** t3.11 ES6 arrows function  */
/*  у стрелочной функции нет контекста  вызова, она берет его у родителя */
let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function(){
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let show = () => {
        console.log(this);
    };
    show();
});

/** t3.16 ES6 spread operators - операторы разворота */

let video = ['youtube', 'vimeo', 'rutybe'];
let blogs = ['wp', 'lj', 'bl'];
let internet = [video, blogs, 'vk', 'fb'];
let internetES6 = [...video, ...blogs, 'vk', 'fb']; // ...  это оператор разворота(разворачивает массив)

console.log(internet);
console.log(internetES6);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [3,5,6];
log(...numbers);

/**  t3.17 */

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 14, "center");
const item2 = new Options(100, 50, "red", 14, "center");
item.createDiv();
item2.createDiv();