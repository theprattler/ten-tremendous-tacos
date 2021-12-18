const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', school = '') {
        super(name);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: `What school does ${this.name} attend?`,
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log(`${this.name} has a life outside of this team!`);
                        return false;
                    }
                }
            }
        ])
    }

    // getRole > overridden to return 'Intern'
    getRole() {
        return Intern;
    }
};

module.exports = Intern;