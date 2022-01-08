
const Employee = require('../lib/Employee');

//getName()
test("gets employee's name", () => {
    const example = "George";
    const employee = new Employee(example);
    expect(employee.getName()).toBe(example);
})

//getId()
test("gets employee's ID", () => {
    const example = '1234';
    const employee = new Employee('George', example);
    expect(employee.getId()).toBe(example);
})

//getEmail()
test("get's employee's email address", () => {
    const example = 'email@server.com';
    const employee = new Employee('George', '1234', example);
    expect(employee.getEmail()).toBe(example);
})

//getRole()
test("check's employee's role on team", () => {
    const example = 'Employee';
    const employee = new Employee(example);
    expect(employee.getRole()).toBe(example);
})