"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propertyName, propertyDescriptor) {
    var method = propertyDescriptor.value;
    propertyDescriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = method.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call " + propertyName + " (" + params + ") -> " + r);
        return result + "!!!";
    };
    return propertyDescriptor;
}
;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };
    __decorate([
        logMethod
    ], Employee.prototype, "greet", null);
    return Employee;
}());
var emp = new Employee("John", "Doe");
console.log(emp.greet("Hello"));
