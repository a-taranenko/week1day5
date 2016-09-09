var myImport = require('./first-exported');

console.log(myImport.name);

console.log('The area of', myImport.name, 'is', myImport.area(), 'km2');