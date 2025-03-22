
// type - псевдонімізатор, робить псевдонім для типу
//
// type MyString = string
// let animal: MyString = 'a cat is animal';
//
//
// type PrimitiveTypes = string | number | boolean
// // можна передати щось із вище зазначеного
// let primitive: PrimitiveTypes = 'hello'
//
//
// //false значення
// type Falsy = 0 | null | undefined | ''| false
// let fal: Falsy = 0;
// console.log(fal)


//intersection - перетин типів

//якщо це тип недоступний, а до нього треба додати
//використовуємо - &

type User2 = {
    name:string,
    age: number,
    status: boolean,
}

//щоб додати id створюємо ще один type
type UserWithId = User2 & {id: number}


let usersArray: UserWithId[] = [
    {id: 1,name: 'vasya', age: 31, status: false},
    {id: 2,name: 'petya', age: 30, status: true},
    {id: 3,name: 'kolya', age: 29, status: true},
    {id: 4,name: 'olya', age: 28, status: false},
    {id: 5,name: 'max', age: 30, status: true},
    {id: 6,name: 'anya', age: 31, status: false},
    {id: 7,name: 'oleg', age: 28, status: false},
    {id: 8,name: 'andrey', age: 29, status: true},
    {id: 9,name: 'masha', age: 30, status: true},
    {id: 10,name: 'olya', age: 31, status: false},
    {id: 11,name: 'max', age: 31, status: true}
];
console.log(usersArray)

// також тут може бути || - або, якщо зустрічаються в різних типах однакові поля

//також тип може бути функцією (як і інтерфейси менше ніж рік тому ??????)
type MyFn = (a:number) => void

