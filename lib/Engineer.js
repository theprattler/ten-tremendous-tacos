const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', github = '') {
        super(name);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: `What is ${this.name}'s GitHub Profile?`,
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Their work deserves to be viewed!');
                        return false;
                    }
                }
            }
        ])
    }

    // getRole() > overridden to return 'Engineer'
    getRole() {
        return Engineer;
    }
};

module.exports = Engineer;