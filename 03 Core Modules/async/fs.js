const fs = require('fs');

function writeFilePromise(filename, content) {
    return new Promise( (resolve, reject) => {
        const callback = error => {
            if (error) reject(error);
            resolve("File was created");
        }
        fs.writeFile(filename, content, callback)
    } )
}

function readFilePromise(filename) {
    return new Promise( (resolve, reject) => {
        const callback = (error, body) => {
            if (error) return reject(error);
            resolve(body);
        };
        fs.readFile(filename, 'utf-8', callback);
    });
    // console.log("BEFORE READ FILE");
    // const body = fs.readFileSync(filename, 'utf-8');
    // console.log("body");
}

// readFile('event-loop.js').then( data => console.log(data) ).catch( err=> console.error(err) );
const filename = 'temp.txt';
// writeFilePromise(filename, 'blah blah').then( data => {
//     readFilePromise(filename).then(data => console.log(`File content: ${data}`));
// });
// async function init() {
//
// }
const init = async() => {
    try {
        await writeFilePromise(filename, '12345');
        const content = await readFilePromise(filename);
        console.log(content);
    }
    catch(ex) {
        console.error(ex);
    }
}

const init2 = async() => {
    await init();
}
init();
// writeFilePromise(filename, 'blah blah'.repeat(10)).then( data => console.log("write file"));
// readFilePromise(filename).then(data => console.log("DATA", data)).catch( err => console.error(err) );