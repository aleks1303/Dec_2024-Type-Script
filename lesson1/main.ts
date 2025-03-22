let x: string = 'hello world';

// типізування змінних
let a: number = 123;
let b: boolean = false;
let c: string = 'hello someone';


// типізування функції
function foo(arg1: number, arg2: number): number {
    return arg1 + arg2;
}

foo(5, 3);

// типізування масиву
let g: number[] = [43, 44, 333,]

let q: string[] = ['hello', 'hello', 'hello']

type Users = {
    name: string,
    age: number,
    status: boolean,
    phone?: number // може бути, може не бути
}
let users: Users[] = [
    {name: 'vasya', age: 31, status: false, phone: 43334433344433},
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


// типізація масивів з функціями

type User1 = {
    name: string;
    age: number;
    status: boolean;
    bar: (str: string) => string;
    numbers: (num: number) => number
}


let user1: User1[] = [
    {name: 'vasya', age: 31, status: false, bar: (str) => 'hello1', numbers: (num) => 345},
    {name: 'petya', age: 30, status: true, bar: (str) => 'hello2', numbers: (num) => 4332},
];


// interfaces
interface IUser {
    name: string;
    age: number;
    status: boolean;
    bar: (str: string) => string;
}

let user2: IUser[] = [
    {name: 'vasya', age: 31, status: false, bar: (str) => 'hello1'},
    {name: 'petya', age: 30, status: true, bar: (str) => 'hello2'},
];


class User {

    constructor(public name: string,
                public age: number,
                public status: boolean,
                public greeting: (str: string) => string)
    {}

}

let user = new User('olga', 34, true, (str) => `Hello ${str}`);
console.log(user.greeting(user.name))

let user3: User[] = [
    {name: 'vasya', age: 31, status: false, greeting: (str) => `Hello`},
    {name: 'petya', age: 30, status: true, greeting: (str) => 'hello2'},
];
