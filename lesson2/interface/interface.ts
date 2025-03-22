
interface IUser1{
    name:string,
    age:number,
    status:boolean
}

// розширення interfaces
// перший варіант - extends
// interface IUser2 extends IUser1{id:number}


// другий варіант однакові назви interfaces
interface IUser1 {
    id: number
}

let usersArray1: IUser1[] = [
    {id:1, name: 'vasya', age: 31, status: false},
    {id:1, name: 'petya', age: 30, status: true},
    {id:1, name: 'kolya', age: 29, status: true},
    {id:1, name: 'olya', age: 28, status: false},
    {id:1, name: 'max', age: 30, status: true},
    {id:1, name: 'anya', age: 31, status: false},
    {id:1, name: 'oleg', age: 28, status: false},
    {id:1, name: 'andrey', age: 29, status: true},
    {id:1, name: 'masha', age: 30, status: true},
    {id:1, name: 'olya', age: 31, status: false},
    {id:1, name: 'max', age: 31, status: true}
];
console.log(usersArray1)