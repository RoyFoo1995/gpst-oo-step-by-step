// Write your code here
module.exports = class Class {

    constructor(number) {
        this.number = number;
        this.leader = false;
    }

    assignLeader(student) {
        if (student.name === "Tom")
            student.clazz.leader = true;
    }
};