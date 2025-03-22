"use strict";
let x = 'hello world';
// типізування змінних
let a = 123;
let b = false;
let c = 'hello someone';
// типізування функції
function foo(arg1, arg2) {
    return arg1 + arg2;
}
foo(5, 3);
// типізування масиву
let g = [43, 44, 333,];
let q = ['hello', 'hello', 'hello'];
let users = [
    { name: 'vasya', age: 31, status: false, phone: 43334433344433 },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
let user1 = [
    { name: 'vasya', age: 31, status: false, bar: (str) => 'hello1', numbers: (num) => 345 },
    { name: 'petya', age: 30, status: true, bar: (str) => 'hello2', numbers: (num) => 4332 },
];
let user2 = [
    { name: 'vasya', age: 31, status: false, bar: (str) => 'hello1' },
    { name: 'petya', age: 30, status: true, bar: (str) => 'hello2' },
];
class User {
    constructor(name, age, status, greeting) {
        this.name = name;
        this.age = age;
        this.status = status;
        this.greeting = greeting;
    }
}
let user = new User('olga', 34, true, (str) => `Hello ${str}`);
console.log(user.greeting(user.name));
let user3 = [
    { name: 'vasya', age: 31, status: false, greeting: (str) => `Hello` },
    { name: 'petya', age: 30, status: true, greeting: (str) => 'hello2' },
];
