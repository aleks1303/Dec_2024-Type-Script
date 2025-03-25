"use strict";
// generic дає можливість для кожного об'єкту визначати свій тип.
// Тип визначаємо на етапі створення або визначення об'єкта тощо
class UserClass1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let userAnna = new UserClass1(1, 'Anna');
console.log(userAnna);
console.log(typeof (userAnna.id)); // number
let userMax = new UserClass1('1', 'Max');
console.log(typeof (userMax.id)); // string
let obj = new UserClass1({ x: 123 }, 'Object');
console.log(typeof obj.id); // object
console.log(typeof obj.name); // string
let item = localStorage.getItem('user');
if (item) {
    let obj = JSON.parse(item);
}
console.log(item);
let dog = localStorage.getItem('dog');
if (dog) {
    let dogObj = JSON.parse(dog);
}
console.log(dog);
// щоб не було повторення коду з отримання даних з localStorage
// робимо функцію з generic
function withGeneric(key) {
    let objJSON = localStorage.getItem(key);
    if (objJSON) {
        return JSON.parse(objJSON);
    }
    else {
        return 'нічого немає';
    }
}
let iUserLS = withGeneric('user');
console.log(iUserLS);
let iDod = withGeneric('dog');
console.log(iDod);
