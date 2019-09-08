// (function sayHello() {
//     let x = 123;
//     console.log("Hello");
// })();
//
// console.log(x);
// sayHello();

// const MavenirNS = {};
// MavenirNS.Utils = MavenirNS.Utils || {};
// MavenirNS.Utils.getEmployees = MavenirNS.Utils.getEmployees ||  function () {
//     return 4000;
// }
// console.log(MavenirNS.Utils.getEmployees());

const MavenirNS = {};
MavenirNS.Utils = (function () {
    function getEmployees() {
        return 4000;
    }

    return {
        getEmployees
    };
})();
console.log(MavenirNS.Utils.getEmployees());