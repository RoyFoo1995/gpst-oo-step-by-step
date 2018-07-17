const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        return this.clazz.leader === false ?
            `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.number}.` :
            `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${this.clazz.number}.`
    }
};