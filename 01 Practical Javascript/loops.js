var arr = [3,6,8];

console.log(arr["0"]);

//
// var arr2 = arr.filter(function (item) {
//     return item > 5;
// });

// function customFilter(arr, func) {
//     var result = [];
//
//     for (var item of arr) {
//         if (func(item)){
//             result.push(item);
//         }
//     }
//
//     return result;
// }
//
// var arr2 = customFilter(arr, function (item) {
//     return item > 7
// });

// console.log(arr2);


// var arr2 = arr.some(function (item) {
//     return item < 0
// });

// var arr2 = arr.reduce(function (acc, item) {
//     return acc + item;
// }, 0)
//

// var arr2 = arr.map(function (item) {
//     if (item > 5) {
//         return {num: item}
//     }
// });

// var arr2 = arr.every(function(item) {
//     return item > 0
// });



//
// for (var [index, item] of Object.entries(arr)) {
//     console.log(index + ": " + item);
// }

// var cars = {
//     "model": "Kia Picanto",
//     "year": 2013,
//     "price": 30000
// };
//
// for (var item in cars) {
//     console.log(item + ": " + cars[item]);
// }

// var arr = [];
// arr.push(2);
// arr[10] = 10;
// // console.log(arr.length);
// console.log(arr);

// if (Array.prototype.filter2) {
//     console.log("Supported")
// }
// else {
//     Array.prototype.filter2 = function() {
//         console.log("A New Function");
//     };
//     console.log("Not Supported")
// }
// arr.filter2();