const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Michael Scott');

    expect(manager.name).toBe('Michael Scott');
    expect(manager.officeNumber).toEqual(expect.any(String));
});

//getOfficeNumber()
test("gets manager's office number", () => {
    const manager = new Manager('Michael Scott');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("sets manager's role to 'Manager'", () => {
    const manager = new Manager('Michael Scott');

    expect(manager.role).toBe('Manager');
});