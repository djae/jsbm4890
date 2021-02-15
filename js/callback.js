"use strict";

function first() {
    //do anything
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    // do
    console.log("Я учу"+ lang);
    callback(); 
}

function done() {
    console.log("Я прошел 3-ий урок");
}

learnJs("JS", done);
