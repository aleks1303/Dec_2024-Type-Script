// generic дає можливість для кожного об'єкту визначати свій тип.
// Тип визначаємо на етапі створення або визначення об'єкта тощо

class UserClass1<T1> {
    id: T1;
    name: string

    constructor(id: T1, name: string) {
        this.id = id;
        this.name = name;
    }
}

let userAnna = new UserClass1<number>(1, 'Anna');
console.log(userAnna)
console.log(typeof (userAnna.id)); // number

let userMax = new UserClass1<string>('1', 'Max')
console.log(typeof (userMax.id)); // string

let obj = new UserClass1<{ x: number }>({x: 123}, 'Object')
console.log(typeof obj.id) // object
console.log(typeof obj.name) // string


//Generic with function

interface IDod {
    aka: string
}

interface IUserLS {
    id: number,
    name: string
}

let item = localStorage.getItem('user');
if (item) {
    let obj = JSON.parse(item) as IUserLS

}
console.log(item)


let dog = localStorage.getItem('dog')
if (dog) {
    let dogObj = JSON.parse(dog) as IDod
}
console.log(dog)

// щоб не було повторення коду з отримання даних з localStorage
// робимо функцію з generic

function withGeneric<T>(key: string): T {
    let objJSON = localStorage.getItem(key)
    if (objJSON) {
       return JSON.parse(objJSON) as T;
    }
        else {
            return {} as T
    }
}

let iUserLS = withGeneric<IUserLS>('user');
console.log(iUserLS)

let iDod = withGeneric<IDod>('dog');
console.log(iDod)












