// Node module system is built around the require function. require is a global variable provided by Node.js
const fs = require('fs'); // To import Node.js core modules we pass the module name to the require function

fs.writeFileSync('notes.txt', 'My name is Sebastian.');

// Challenge

fs.appendFileSync('notes.txt', ` I'm appending this one`);