const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateData = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const team = [];

const memberQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this person's Role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'text',
        name: 'name',
        message: `What is this member's Name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Their mother would not be happy with you!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter their Employee ID:`,
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
]

const generatorBanner = () => {
    console.log(`
    ======================
    TEAM PROFILE GENERATOR
    ======================
    `);
};

const generateTeam = () => {

    console.log(`
    ===============
    NEW TEAM MEMBER
    ===============
    `);

    inquirer
    .prompt(memberQuestions)
    .then((roleQuestion) => {
        inquirer
        .prompt([
            {
                when: () => roleQuestion.role === 'Manager',
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter their Office Number:',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('We promise we will not egg their desk!');
                        return false;
                    }
                }
            },
            {
                when: () => roleQuestion.role === 'Engineer',
                type: 'input',
                name: 'github',
                message: 'Please enter their GitHub Username:',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Their work deserves to be viewed!');
                        return false;
                    }
                }
            },
            {
                when: () => roleQuestion.role === 'Intern',
                type: 'input',
                name: 'school',
                message: `What School does this person attend?`,
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log(`They have a life outside of this team!`);
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddMember',
                message: 'Would you like to add another member to the team?'
            }
        ])
        .then((roleAnswer) => {
            if (roleQuestion.role === 'Manager') {
                const manager = new Manager(roleQuestion.name, roleQuestion.id, roleQuestion.email, roleAnswer.officeNumber, roleQuestion.role);
                team.push(manager);
            }  
            if (roleQuestion.role === 'Engineer') {
                const engineer = new Engineer(roleQuestion.name, roleQuestion.id, roleQuestion.email, roleAnswer.github, roleQuestion.role);
                team.push(engineer);
            }
            if (roleQuestion.role === 'Intern') {
                const intern = new Intern(roleQuestion.name, roleQuestion.id, roleQuestion.email, roleAnswer.school, roleQuestion.role);
                team.push(intern);
            }
            if (roleAnswer.confirmAddMember) {
                generateTeam();
                return team;
            } else {
                return team;
            }
        })
        .then(teamData => {
            return templateData(teamData);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch((err) => {
            if (err) {
                throw err;
            }
        });
    });
};

generatorBanner();
generateTeam();