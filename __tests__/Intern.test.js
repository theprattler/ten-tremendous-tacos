const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const schoolEx = 'school';
    const intern = new Intern('George', '1234', 'email@server.com', schoolEx);
    expect(intern.name).toBe('George');
    expect(intern.school).toBe(schoolEx);
});

test("gets intern's school", () => {
    const example = 'school';
    const intern = new Intern('George', '1234', 'email@server.com', example);
    expect(intern.getSchool()).toBe(example);
});

test("sets intern's role to 'Intern'", () => {
    const intern = new Intern('Ryan Howard');
    expect(intern.role).toBe('Intern');
})