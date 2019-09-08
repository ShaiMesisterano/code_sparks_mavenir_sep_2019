function Person(name, age) {
    let _name = name;
    let _age = age;

    function displayAge(prefix) {
        console.log(prefix + age);
    }

    return {
        displayAge: displayAge
    }
}

let person = Person("Shai", 34);
person.displayAge("My age is: ");

let person2 = Person("John", 23);
person2.displayAge("My age is: ");