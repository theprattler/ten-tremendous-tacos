
const Employee = require('../lib/Employee');

/*test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});*/

//getName()
test("gets employee's name", () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
})

//getId()
test("gets employee's ID", () => {
    const employee = new Employee();

    expect(employee.id).toEqual(expect.any(String));
})

//getEmail()
test("get's employee's email address", () => {
    const employee = new Employee();

    expect(employee.email).toEqual(expect.any(String));
})

//getRole()
test("check's employee's role on team", () => {
    const employee = new Employee();

    expect(employee.role).toEqual(expect.any(String));
})