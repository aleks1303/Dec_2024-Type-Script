
interface IAnimal {
    isAlive:boolean,
    sounds: () => void;
}
interface X extends IAnimal{
    name: string
}

class Birds implements X {
    private _name: string;
    private _isAlive: boolean;
    private _wings:boolean

    constructor(name: string, isAlive: boolean, wings: boolean) {
        this._name = name;
        this._isAlive = isAlive;
        this._wings = wings;
    }

    sounds(): void {
        if (!this.isAlive) {
            console.log('Нажаль горобець мертвий і не може літати та співати')
        } else if (this.name !== 'sparrow') {
            console.log('Це не горобець, він не може робити чірік-чірік')
        } else if (!this.wings) {
            console.log('Горобець не може літати, але може співати')
        } else {
            console.log('все гаразд: це горобець (чірік-чірік)');
        }
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }

    set isAlive(value: boolean) {
        this._isAlive = value;
    }

    get wings(): boolean {
        return this._wings;
    }

    set wings(value: boolean) {
        this._wings = value;
    }
}
const sparrow = new Birds("sparrow", false, false);
console.log(sparrow)
sparrow.sounds()