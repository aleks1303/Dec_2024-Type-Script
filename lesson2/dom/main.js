"use strict";
// типізація DOM elements
const elementsByClassName = document.getElementsByClassName('target');
console.log(elementsByClassName);
const elementsByTagNameDiv = document.getElementsByTagName('div');
console.log(elementsByTagNameDiv);
const ageUser = { age: "433" };
const ageNumber = { age: 3443 };
//forms
const forms = document.forms;
const f1 = forms[0];
const username = f1.username;
console.log(username);
// краще так і вказати тип самостійно, тому що пише any
const f1Element = f1['age'];
console.log(f1Element);
f1Element.placeholder = 'hello';
const btn = document.getElementsByTagName('button');
console.log(btn);
//якщо створюємо елемент
const p = document.createElement('p');
console.log(p);
p.style.background = '#cbece2';
p.innerText = 'hello';
document.body.append(p);
let users2 = [
    { name: 'vasya', age: 31, status: false },
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
for (const user of users2) {
    const div = document.createElement('div');
    div.innerText = `${user.name} ${user.age} ${user.status}`;
    document.body.append(div);
}
function appender(tag) {
    const div1 = document.createElement('div');
    for (let i = 0; i < 7; i++) {
        const someP = document.createElement(tag);
        someP.innerText = 'hello';
        div1.append(someP);
    }
    document.body.append(div1);
}
appender('p');
