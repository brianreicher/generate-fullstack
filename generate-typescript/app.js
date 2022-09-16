// number type - no specifics for ints or floats
// string - 'Hi', "Hi", `Hi` 
// boolean - true, false
// TypeScript function
function add(n1, n2, print, phrase) {
    var result = n1 + n2;
    if (print) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
// JavaScript function
function add_js(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input type');
    }
    return n1 + n2;
}
var number1 = 5;
var num1;
num1 = 10;
var number2 = 2.8;
var printResult = true;
var res = "Result is: ";
add(number1, number2, printResult, res);
// console.log(result);
