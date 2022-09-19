// LOOK AT DECORATORS
// null
// undefined
// boolean // true or false
// string // "", "Hi!", "abc123", …
// number // 0, 2.1, -4, …
// bigint // 0n, 2n, -4n, …
// symbol // Symbol(), Symbol("hi")

// Condition ? True: False
let song: string = Math.random() > .5
    ? "lucid dreams"
    : "99 problems";

song.length // no parens

// list.push(element) instead of .append()

// Modules
const num = 5;
export {num};

// typeof variable
// toUpperCase(), toLowerCase(), toFixed()

// Object unionization
type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;
// Equivalent to:
// {
//   genre: string;
//   name: string;
//   pages: number;
// }

// Intersecting types
type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { meter: number; type: "villanelle"; }
);

// Ok
const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};

// Optional function parameters
function sayHi(greeting: string, name?: string){
    console.log(greeting + name)
}

// Varaiable input into strings 'Name: ${name}'

// Rest function parameters, function return type after params with semicolon
function singAllTheSongs(singer: string, ...songs: string[]): void{
    for (const song of songs) {
      console.log(`${song}, by ${singer}`);
    }
  }

singAllTheSongs("Alicia Keys"); // Ok
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
// singAllTheSongs("Ella Fitzgerald", 2000); // Not ok


// Never & unknown return types/params
function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}.`);
}

function workWithUnsafeParam(param: unknown) {
    if (typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    }

    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}

// Arrays
// Type is a function that returns an array of strings
let createStrings: () => string[];

// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

// Multidimensional Arrays
let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ];

// Spreads
const x: number[] = [1, 2, 3, 4];
const y: number[] = [5, 6, 7, 8];
var z  = [...x, ...y]

// Tuples --> array of fixed size

let tuple: [number, string, number];


function logPair(name: string, value: number):  void {
    console.log(`${name} has ${value}`);
  }

const pairTupleCorrect: [string, number] = ["Amage", 1];

logPair(...pairTupleCorrect); // Ok

// foreach js 
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// as const 

const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247; // Ok

const pairConst = [1157, "Tomoe"] as const;
// pairConst[0] = 1247;  NOT OK