'use strict';

/** old variant */
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hi = function () {
        console.log('hi');
    };
}

/** ES6 variant */
class User1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hi() {
        console.log('hi');
    }
}

let u1 = new User('u1', '01');
let u2 = new User('u2', '02');

console.log(u1);
console.log(u2);