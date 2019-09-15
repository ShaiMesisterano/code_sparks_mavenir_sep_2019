function print1() {
    return new Promise( (resolve, reject) => {
        try{
            setTimeout(() => resolve("1"), 1000);
        }
        catch(ex) {
            reject(ex);
        }
    } )
    // setTimeout(() => console.log("1"), 1000);
}

function print2() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("2"), 500);
    });
}

function print3() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("3"), 2000);
    });
}

print1()
    .then( data => {console.log(data); return print2()}).catch( err => console.error(err) )
    .then( data => {console.log(data); return print3()}).catch( err => console.error(err) )
    .then( data => {console.log(data)}).catch( err => console.error(err) );

console.log("AFTER");
// print2();
// print3();