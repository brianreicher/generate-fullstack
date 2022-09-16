// Functions & types
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
// console.log(printResult(add(5, 12))); returns VOID, even though undefined
var someValue = undefined; // Functions cannot return undefined, should return void if no return statement
function returnVoid(x) {
    Math.pow(x, 2);
}
// instead of
function returnUndef(x) {
    Math.pow(x, 2);
    return;
}
// Functions as types
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
console.log(combinedValues(20, 40));
