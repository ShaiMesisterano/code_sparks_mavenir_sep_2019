const car = {
    color: "red",
    getColor: function (prefix, suffix) {
        console.log(prefix + this.color + suffix);
    }
}

const kia = {
    color: "black"
}

// car.getColor.call(kia, "Car's name: ", "!!!");
// car.getColor.apply(kia, "Car's name: ", "!!!"]);
// const bound = car.getColor.bind(kia, "Car's name: ", "!!!");
// bound();
const add = (num1, num2) => num1 + num2;
const add5 = add.bind(null, 5);
console.log(add5(3));