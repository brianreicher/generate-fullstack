// number type - no specifics for ints or floats
// string - 'Hi', "Hi", `Hi` 
// boolean - true, false

// TypeScript function
function add(n1: number, n2: number, print: boolean, phrase: string)
{
    const result = n1+n2;
    if(print){
        console.log(phrase + result);
    }
    else{
        return n1+n2;}
}

// JavaScript function
function add_js(n1, n2)
{
    if(typeof n1 !== 'number' || typeof n2 !== 'number')
    {
        throw new Error('Incorrect input type');
    }
    return n1+n2;
}

const number1 = 5;
let num1: number;
num1 = 10;
const number2 = 2.8;
const printResult = true;
const res = "Result is: ";
add(number1, number2, printResult, res);

// object types --> any JavaScript object + more specifc types
