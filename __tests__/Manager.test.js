const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const example = '1';
    const manager = new Manager('George', '1234', 'email@server.com', example);
    expect(manager.name).toBe('George');
    expect(manager.officeNumber).toBe(example);
});

//getOfficeNumber()
test("gets manager's office number", () => {
    const example = '1234'
    const manager = new Manager('George', '1234', 'email@server.com', example);
    expect(manager.getOfficeNumber()).toBe(example);
});

test("sets manager's role to 'Manager'", () => {
    const manager = new Manager('George');
    expect(manager.role).toBe('Manager');
});