const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', officeNumber = '') {
        super(name);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is ${this.name}'s Office Number?`,
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('We promise we will not egg their desk!');
                        return false;
                    }
                }
            }
        ])
    };

    getRole() {
        return Manager;
    }
};

module.exports = Manager;