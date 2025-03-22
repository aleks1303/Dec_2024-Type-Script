
// типізація DOM elements

const elementsByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName('target');
console.log(elementsByClassName)

const elementsByTagNameDiv: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
console.log(elementsByTagNameDiv)

//приклад з GPT (generic)

interface Box <T> {
    age: T,
}
const ageUser: Box<string> = { age: "433"}
const ageNumber: Box <number> = {age: 3443}


//forms

const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
const f1: HTMLFormElement = forms[0];


const username: HTMLInputElement = f1.username;
console.log(username)

// краще так і вказати тип самостійно, тому що пише any
const f1Element: HTMLInputElement = f1['age'];
console.log(f1Element)
f1Element.placeholder = 'hello'


const btn: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button')
console.log(btn)


//якщо створюємо елемент
const p: HTMLParagraphElement = document.createElement('p');
console.log(p)
p.style.background = '#cbece2'
p.innerText = 'hello'
document.body.append(p)

type UserType = {
  name: string;
  age: number;
  status: boolean;
}

let users2: UserType[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users2) {
    const div: HTMLDivElement = document.createElement('div');
    div.innerText = `${user.name} ${user.age} ${user.status}`
    document.body.append(div)
}

function appender (tag: keyof  HTMLElementTagNameMap) {
    const div1: HTMLDivElement = document.createElement('div');
    for (let i = 0; i < 7; i++) {
        const someP = document.createElement(tag);
        someP.innerText = 'hello'
        div1.append(someP)
    }
    document.body.append(div1)
}
appender('p')