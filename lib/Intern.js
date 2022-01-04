const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email, role);

        this.school = school;
        this.role = 'Intern;'
    }

    getSchool() {
        return this.school;
    }

    // getRole > overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;