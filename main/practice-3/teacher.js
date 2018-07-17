const Person = require('./person');
module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
        this.classes.forEach(value => value.subscribers(this));
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

    isTeaching(student) {
        let isTeach = false;
        for (let index = 0; index < this.classes.length; index++) {
            if (this.classes[index].hasStudent(student) !== false)
                return true;
        }
        return isTeach;
    }

    notifyLeaderAssigned(student) {
        return `I am ${this.name}. I know Jerry become Leader of Class ${student.clazz.number}.`;
    }

    notifyStudentAppended(student) {
        return `I am ${this.name}. I know ${student.name} has joined Class ${student.clazz.number}.`;
    }

};