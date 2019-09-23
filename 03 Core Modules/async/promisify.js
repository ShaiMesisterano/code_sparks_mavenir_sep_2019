const { readFile } = require('fs');

const { promisify } = require('util');

const promiseReadFile = promisify(readFile);

promiseReadFile('http.js', 'utf-8').then( fileContent => console.log("file content", fileContent) ).catch(err => console.error(err));

