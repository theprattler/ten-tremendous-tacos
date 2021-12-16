const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Michael Scott');

    expect(manager.name).toBe('Michael Scott');
    expect(manager.officeNumber).toEqual(expect.any(String));
});