const Person = require('./person');

module.exports = class Worker extends Person {
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`
    }
};