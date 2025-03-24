"use strict";
class UserClass {
    constructor(_name, _age, _status) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }
    greeting() {
        return "Hello World!";
    }
    get name() {
        console.log('Getting from UserClass');
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
let userClass = new UserClass('Anna', 34, true);
console.log(userClass);
console.log(userClass.greeting());
console.log(userClass.name);
userClass.name = 'Olga';
console.log(userClass.name);
console.log(userClass.age);
userClass.age = 35;
console.log(userClass.age);
class UserClass2 extends UserClass {
    constructor(name, age, status, _id) {
        super(name, age, status);
        this._id = _id;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let userClass2 = new UserClass2('Max', 33, true, 1);
console.log(userClass2.name);
// приклади з GPT
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius ** 2; // автоматично рахує площу
    }
}
const circle = new Circle(10);
console.log(circle.area);
// викликаємо get area з першого class
class Circle2 extends Circle {
}
let circle2 = new Circle2(55);
console.log(circle2.area);
class Person {
    constructor(name) {
        this._fullName = name.trim();
    }
    get fullName() {
        return this._fullName.toUpperCase(); // автоматично приводить до ВЕРХНЬОГО регістру
    }
    set fullName(name) {
        if (name.length > 1) {
            this._fullName = name.trim(); // видаляє пробіли
        }
        else {
            console.error("Ім'я не може бути порожнім");
        }
    }
}
const person1 = new Person('Alla');
person1.fullName = '';
console.log(person1.fullName);
class Person2 extends Person {
}
const person2 = new Person2(' norman   ');
console.log(person2.fullName);
