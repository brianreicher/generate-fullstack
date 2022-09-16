// Functions & types

function add(n1: number, n2: number): number{
    return n1+n2;
}

function printResult(num: number): void{
    console.log('Result: ' + num);
}

printResult(add(5, 12));
// console.log(printResult(add(5, 12))); returns VOID, even though undefined

let someValue = undefined; // Functions cannot return undefined, should return void if no return statement

function returnVoid(x: any): void{
    x**2;
}

// instead of

function returnUndef(x: any): undefined{
    x**2;
    return;
}

// Functions as types

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
console.log(combinedValues(20, 40));