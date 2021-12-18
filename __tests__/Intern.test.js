const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('Ryan Howard');

    expect(intern.name).toBe('Ryan Howard');
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern('Ryan Howard');

    expect(intern.school).toEqual(expect.any(String));
});

test("sets intern's role to 'Intern'", () => {
    const intern = new Intern('Ryan Howard');

    expect(intern.role).toBe('Intern');
})