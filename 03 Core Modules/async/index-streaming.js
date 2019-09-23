const fs = require('fs');

const stream = fs.createReadStream('output.txt');

console.time('stream experiment');

stream.on('data', buffer => console.log(buffer.toString())).on('close', () => console.timeEnd('stream experiment'));

// let fileContent = "";
// stream.on('data', buffer => fileContent+=buffer.toString()).on('close', () => console.log(fileContent));