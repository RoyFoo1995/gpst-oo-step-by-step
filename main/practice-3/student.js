const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        if (this.clazz.hasStudent(this) === false)
            return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I haven't been allowed to join Class.`;
        return this.clazz.leader === false ?
            `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.number}.` :
            `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${this.clazz.number}.`
    }
};