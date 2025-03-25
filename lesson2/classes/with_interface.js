"use strict";
class Birds {
    constructor(name, isAlive, wings) {
        this._name = name;
        this._isAlive = isAlive;
        this._wings = wings;
    }
    sounds() {
        if (!this.isAlive) {
            console.log('Нажаль горобець мертвий і не може літати та співати');
        }
        else if (this.name !== 'sparrow') {
            console.log('Це не горобець, він не може робити чірік-чірік');
        }
        else if (!this.wings) {
            console.log('Горобець не може літати, але може співати');
        }
        else {
            console.log('все гаразд: це горобець (чірік-чірік)');
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    get wings() {
        return this._wings;
    }
    set wings(value) {
        this._wings = value;
    }
}
const sparrow = new Birds("sparrow", false, false);
console.log(sparrow);
sparrow.sounds();
