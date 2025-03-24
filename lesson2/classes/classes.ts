
class  UserClass {
    constructor(private _name: string, private _age: number, private _status: boolean) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }
   public greeting () {
        return "Hello World!";
    }

    get name(): string {
        console.log('Getting from UserClass')
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}
let userClass = new UserClass('Anna', 34, true);
console.log(userClass);
console.log(userClass.greeting());
console.log(userClass.name);
userClass.name = 'Olga'
console.log(userClass.name);
console.log(userClass.age);
userClass.age = 35;
console.log(userClass.age);


class UserClass2 extends UserClass{
    constructor(name: string, age: number, status: boolean, private _id: number) {
        super(name, age, status);
        this._id = _id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
let userClass2 = new UserClass2('Max', 33, true, 1);
console.log(userClass2.name);


// приклади з GPT


class Circle {
    constructor(private radius: number) {}

    get area(): number {
        return Math.PI * this.radius ** 2; // автоматично рахує площу
    }
}
const circle = new Circle(10);
console.log(circle.area);

// викликаємо get area з першого class
class Circle2 extends Circle {

}

let circle2 = new Circle2(55);
console.log(circle2.area)



class Person {
    private _fullName: string;
    constructor(name:string) {
        this._fullName = name.trim()
    }

    get fullName(): string {
        return this._fullName.toUpperCase(); // автоматично приводить до ВЕРХНЬОГО регістру
    }

    set fullName(name: string) {
        if (name.length > 1) {
            this._fullName = name.trim(); // видаляє пробіли
        } else {
            console.error("Ім'я не може бути порожнім");
        }
    }
}

const person1 = new Person('Alla');
person1.fullName = ''
console.log(person1.fullName);


class Person2 extends Person{

}
const person2 = new Person2(' norman   ');

console.log(person2.fullName)
