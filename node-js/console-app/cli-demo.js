#!/usr/bin/env node

// output message
console.log('App Init Sequence . . .');


// process.env contains enviorment variables/value pairs
const nameArg = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME ||'world');

// output message
console.log(`Hello ${ nameArg }!`);

// capitalization function 
function capitalize(str) {

    return str
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
  }