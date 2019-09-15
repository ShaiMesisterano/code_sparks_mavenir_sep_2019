function foo() {
    console.log("foo");
}

function bar() {
    let num=  0;
    foo();

    setTimeout(() => console.log("timeout"), 1);

    for (let i=1; i<=1000000; i++) {
        num++;
    }

    console.log("bar");
}

bar();