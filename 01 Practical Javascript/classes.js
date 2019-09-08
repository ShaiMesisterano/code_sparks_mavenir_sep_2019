class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayAge(prefix) {
        console.log(prefix + this.age);
    }
}

class Child extends Person {
    constructor(name, age) {
        super(name, age);
        this.age = this.age + " (child's age)";
    }
    // displayAge() {
    //     super.displayAge("Child's age");
    //     console.log("Another thing...");
    // }
    displayAge = () => {
        super.displayAge("Child's age");
        console.log("Another thing...");
    }
}

// let person = new Person("Shai", 34);
// person.displayAge("My age is: ");
//
// console.log(Person.prototype.displayAge.toString());

let child = new Child("Rob", 10);
child.displayAge("Child's name is: ");