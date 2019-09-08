// reference
var obj = {
    a: 1,
    nested: {
        b: 2
    }
};

// var obj2 = obj;
// var obj2 = {...obj};
// var obj2 = Object.assign({}, obj);
// var obj2 = {
//     ...obj,
//     nested:  {...obj.nested}
// };
// obj.nested.b = 999;
var obj2 = JSON.parse(JSON.stringify(obj));

console.log(obj2);



// value
// var str = "hello";
// var str2 = str;
// str = "world";
// console.log(str2);