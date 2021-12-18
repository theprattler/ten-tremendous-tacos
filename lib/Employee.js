const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id = '', email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Their mother would not be happy with you.');
                        return false;
                    }
                }
            }
        ])
    }

    getId() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: "Please enter this employee's Employee ID:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('We know they are more than just a number!');
                        return false;
                    }
                }
            },
        ])
    }

    getEmail() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'email',
                message: 'What is their Email Address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Come on, they will not receive spam from us!');
                        return false;
                    }
                }
            },
        ])
    }

    getRole() {
        return Employee
    }
};


module.exports = Employee;