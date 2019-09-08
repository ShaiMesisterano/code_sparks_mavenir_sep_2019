// function add(num1, num2){
//     return num1 + num2;
// }

// var add = function (num1, num2) {
//     return num1 + num2;
// }
//
// var sum = add(2,3);
//
// console.log(sum);

// BEHIND THE SCENES:
// var x = undefined;
//
// 'use strict';
//
// y = 123;
//
// console.log(x);
// var x = function () {
//     return 123;
// };

// BEHIND THE SCENES
// function foo() {
//     return "Hello";
// }
// 'use strict';

// console.log(foo());
// function foo() {
//     return "Hello";
// }

// console.log(z);
// let z = 123;

// console.log(t);
// const t = 456;


// function foo() {
//     return "Hello";
// }
//
// var foo = () => {
//     return "Hello";
// }
// var foo = () => "Hello";
// var getPerson = () => ({
//     name: "John",
//     height: 187
// });
// console.log(getPerson());

// const add = (num1, num2) => num1 + num2;
// console.log(add(3,5));

// const arr = [1,3,5];
// Object.freeze(arr);
// arr.push(7);
// arr.push(6);
// console.log(arr);
// const obj = {
//     a: 1,
//     b: 2
// }
// const printName = name => console.log(`My name is ${name}`);
// console.log(printName("Jimmy"));

let obj = {
    a: 1,
    b: 2
}
function f(obj) {
    // let a = obj.a;
    // let b = obj.b;
    let { a, b: num2 } = obj; //Destructuring

    console.log(a + num2);
}
f(obj);