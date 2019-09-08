function Person(name, age) {
    this.name = name;
    this.age = age;

    Person.prototype.displayAge = function(prefix) {
        console.log(prefix + this.age);
    }
}

let person = new Person("Shai", 34);
person.displayAge("My age is: ");
let person2 = new Person("John", 23);

Person.prototype.incrementAge = function (num) {
    this.age += num;
    console.log("New age: " + this.age);
}

person.incrementAge(10);
person2.incrementAge(10);
