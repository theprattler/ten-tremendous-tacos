const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: "What is the Team Manager's Name?",
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
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is their Office Number?`,
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
        type: 'list',
        name: 'confirmAddMember',
        message: 'Would you like to add another member?',
        choices: ['Yes', "I'm finished building my team"]
    }
]

const genericQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this person's role?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'text',
        name: 'name',
        message: `What is this ${this.role}'s Name?`,
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
        message: `Now enter ${this.name}'s Employee ID:`,
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
    }
]

const team = [];
const generateTeam = () => {

    console.log(`
    ======================
    TEAM PROFILE GENERATOR
    ======================
    `);

    inquirer
    .prompt(managerQuestions)
    .then((profile) => {
        const manager = new Manager(profile.name, profile.id, profile.email, profile.officeNumber, profile.role);
        team.push(manager);
        console.log(manager);
        inquirer
        .prompt(genericQuestions)
        .then((roleQuestion) => {
            inquirer
            .prompt([
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
                    message: `What school does ${this.name} attend?`,
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log(`${this.name} has a life outside of this team!`);
                            return false;
                        }
                    }
                },
                {
                    when: () => (roleQuestion.role === 'Engineer' || roleQuestion.role === 'Intern'),
                    type: 'list',
                    name: 'confirmAddMember',
                    message: 'Would you like to add another member?',
                    choices: ['Yes', "I'm finished building my team"]
                }
                

            ])
            .then((roleAnswer) => {
                if (roleQuestion.role === 'Engineer') {
                    const engineer = new Engineer(roleQuestion.name, roleQuestion.id, roleQuestion.email, roleAnswer.github, roleQuestion.role);
                    team.push(engineer);
                    console.log(engineer);
                    console.log(team);
                }
                if (roleQuestion.role === 'Intern') {
                    const intern = new Intern(roleQuestion.name, roleQuestion.id, roleQuestion.email, roleAnswer.school, roleQuestion.role);
                    team.push(intern);
                    console.log(intern);
                    console.log(team);
                }
                if (roleAnswer.confirmAddMember === 'Yes') {
                    generateTeam(genericQuestions);
                } else {
                    team.forEach((team) => {
                        console.log(team);
                    });
                }
            })
        })
    })
    
}





generateTeam();
/*
function Team() {
    this.people = [];
    this.currentPerson = [];
};

Team.prototype.initializeGenerator = function() {
    this.people.push(new Manager);
    this.currentPerson = this.people[0];

    console.log(`
    ======================
    TEAM PROFILE GENERATOR
    ======================
    `);

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is the Team Manager's name?"
        })
        .then(({ name }) => {
            this.currentPerson = new Manager(name);
            this.getGenericQuestions();
        });
};

Team.prototype.getGenericQuestions = function() {
    
    this.currentPerson.getId();
    
        this.getSpecificQuestion();
    
    return this.currentPerson;
    
};

Team.prototype.getSpecificQuestion = function() {

    if (this.currentPerson.role === "Manager") {
        this.currentPerson.getOfficeNumber();
    }
    
}

function managerSection(managerData) {

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
        .then(roleSection());
}

function engineerSection(engineerData) {

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
    .then(htmlData => {
        engineerData.push(htmlData);
        console.log(engineerData);
        return engineerData;
    })

};

function roleSection() {
    
    
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Would you like to add someone to your team?',
            choices: ['Engineer', 'Intern', "I'm finished building my team"],

        }
    ])
    .then(roles => {
        if (roles.roles === 'Engineer') {
            engineerSection();
        }
    })
}

/*managerSection()
    .then(managerData => {
        return managerData;
    })*/
    
//new Team().initializeGenerator();