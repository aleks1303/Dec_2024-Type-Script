
abstract class Animal {
    isAlive: boolean
    name: string

    constructor(isAlive: boolean, name: string) {
        this.isAlive = isAlive;
        this.name = name
    }
     abstract sound(): void
}

class Bird extends Animal{
    wings: boolean

    constructor(isAlive: boolean, wings: boolean, name: string) {
        super(isAlive, name);
        this.wings = wings;
    }
    sound() {
        if (!this.isAlive) {
            console.log('Прах мертвий і не може літати та співати')
        } else if (this.name !== 'vorobey') {
            console.log('Це не горобець, він не може робити чірік-чірік')
        } else if (!this.wings) {
            console.log('Птах не може літати, але може співати')
        } else {
            console.log('все гаразд: це горобець (чірік-чірік)');
        }
    }

}
const bird = new Bird(true, true, 'vorobey')
console.log(bird)

bird.sound()