module.exports = class Class {

    constructor(number) {
        this.number = number;
        this.leader = false;
        this.students = [];
    }

    assignLeader(student) {
        if (this.teacher)
            this.teacher.notifyLeaderAssigned(`Jerry become Leader of Class ${student.clazz.number}`);
        if (this.hasStudent(student)) {
            student.clazz.leader = true;
            return `Assign team leader successfully.`;
        } else {
            return `It is not one of us.`;
        }
    }

    appendMember(student) {
        this.students.push(student);
        if (this.teacher) this.teacher.notifyStudentAppended(`Jerry has joined Class ${student.clazz.number}`);

    }

    hasStudent(student) {
        return this.students.includes(student);
    }

    subscribers(teacher) {
        this.teacher = teacher;
    }
};