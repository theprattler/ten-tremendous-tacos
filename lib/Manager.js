const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', officeNumber = '') {
        super(name);

        this.officeNumber = officeNumber;
    };

    // getRole() > overridden to return 'Manager'
}

module.exports = Manager;