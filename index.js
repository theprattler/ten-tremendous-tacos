const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require('process');

const managerSection = managerData => {

    console.log(`
    ======================
    TEAM PROFILE GENERATOR
    ======================
    `);

    if (!managerData) {
        managerData = [];
    }

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Their mother would not be happy with you.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('We know they are more than just a number!');
                    return false;
                }
            }
        },
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
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their Office Number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('We promise we will not egg their desk!');
                    return false;
                }
            }
        },
    ])
    .then(htmlData => {
        managerData.push(htmlData);
        console.log(managerData);
        return managerData;
    })
};

const engineerSection = engineerData => {

    if (!engineerData) {
        engineerData = [];
    }

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Their mother would not be happy with you.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('We know they are more than just a number!');
                    return false;
                }
            }
        },
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
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their GitHub profile name:',
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
};

const roleSection = roles => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Would you like to add someone to your team?',
            choices: ['Engineer', 'Intern', "I'm finished building my team"],

        }
    ])

}

managerSection();