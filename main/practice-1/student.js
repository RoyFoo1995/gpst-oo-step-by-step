const Person = require('./person');

class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz}.`
    }
};

module.exports = Student;