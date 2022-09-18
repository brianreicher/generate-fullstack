"use strict";
// LOOK AT DECORATORS
// null
// undefined
// boolean // true or false
// string // "", "Hi!", "abc123", …
// number // 0, 2.1, -4, …
// bigint // 0n, 2n, -4n, …
// symbol // Symbol(), Symbol("hi")
exports.__esModule = true;
exports.num = void 0;
// Condition ? True: False
var song = Math.random() > .5
    ? "lucid dreams"
    : "99 problems";
song.length; // no parens
// list.push(element) instead of .append()
// Modules
var num = 5;
exports.num = num;
// Ok
var morningGlory = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku"
};
// Optional function parameters
function sayHi(greeting, name) {
    console.log(greeting + name);
}
// Varaiable input into strings 'Name: ${name}'
// Rest function parameters, function return type after params with semicolon
function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song_1 = songs_1[_a];
        console.log("".concat(song_1, ", by ").concat(singer));
    }
}
singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
// singAllTheSongs("Ella Fitzgerald", 2000); // Not ok
// Never & unknown return types/params
function fail(message) {
    throw new Error("Invariant failure: ".concat(message, "."));
}
function workWithUnsafeParam(param) {
    if (typeof param !== "string") {
        fail("param should be a string, not ".concat(typeof param));
    }
    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}
// Arrays
// Type is a function that returns an array of strings
var createStrings;
// Type is an array of functions that each return a string
var stringCreators;
// Multidimensional Arrays
var arrayOfArraysOfNumbers;
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];
