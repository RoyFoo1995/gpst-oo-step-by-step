const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }

    introduce() {
        let classesStr = '';
        this.classes.forEach(value => {
            classesStr += value.number.toString() + ',';
        });
        return classesStr !== '' ?
            `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${classesStr.substr(0, classesStr.length - 1)}.` :
            `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`

    }
};