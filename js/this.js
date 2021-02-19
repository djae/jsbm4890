/* 'use strict'; */

/** 1) просто вызов функции: this -> window/underfine */
function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        //return this.a + this.b;
        return a + b;
    }
    console.log(sum());
}

showThis(4,5);
showThis(5,5);

/** 2) объект this -> объект */
let obj = {
    a: 20,
    b: 15,
    sum: function (){
        console.log(this);
        function shout(){
            console.log(this);
        }
        shout();
    }
};
obj.sum();

/** 3) вызов через new this -> новый созданный объект */

/** 4) указание конкретного контекста выхова с помощью call/apply/bind */

let user = {
    name: 'den'
}

console.log('----');

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user,' smith'));
console.log(sayName.apply(user, [' snoy']));

function count(number){
    return number * 2;
};

let double = count.bind(2); //при вызове count this = 2, т.е привязали(bind) 2 к this

console.log(count(3));
console.log(count(10));


// 5)

let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis2(){
        console.log(this);

    }
    showThis2();
})