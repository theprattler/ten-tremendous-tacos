const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', school = '') {
        super(name);

        this.school = school;
    }

    // getSchool()

    // getRole > overridden to return 'Intern'
};

module.exports = Intern;