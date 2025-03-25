
// все те ж саме, що і з interface

type AnimalType = {
    isAlive:boolean,
    name: string
    sound: () => void
}

class AnimalWithType implements AnimalType{
    isAlive: boolean;
    name: string;

    constructor(isAlive: boolean, name: string) {
        this.isAlive = isAlive;
        this.name = name;
    }

    sound(): void {
    }

}