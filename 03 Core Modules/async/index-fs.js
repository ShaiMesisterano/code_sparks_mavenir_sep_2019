const fs = require('fs');

console.time('stream experiment - readFile');

fs.readFile('output.txt', (error, data) => {
    console.log(data.toString());
    console.timeEnd('stream experiment - readFile');
});