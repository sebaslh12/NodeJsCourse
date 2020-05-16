// Node.js scope is modular, all variables only exists here unless we export them
console.log('utils.js');

const name = 'Sebastian';

const add = (a, b) => a + b;

// This basically works as a return statement
module.exports = { name, add }; // To export more than one thing we wrapped them up inside an object