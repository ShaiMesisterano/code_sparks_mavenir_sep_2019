var hamburger = {
    price: 50,
    "ingredients-list": ["meat", "bun", "lettuce", "pickles"],
    level: "medium"
};

// var key = "ingredients-list";
//
// console.log(hamburger[key]);

// console.log(hamburger.level);
// console.log(hamburger["level"]);
// console.log(hamburger["notExist"]);
delete hamburger.price;
console.log(hamburger);