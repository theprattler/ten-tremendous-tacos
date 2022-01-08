const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const githubEx = 'georgeofthejungle'
    const engineer = new Engineer('George', '1234', 'email@server.com', githubEx);
    expect(engineer.name).toBe("George");
    expect(engineer.github).toBe(githubEx);
});

//getGithub()
test("gets engineer's github profile name", () => {
    const example = 'georgeofthejungle';
    const engineer = new Engineer('George', '1234', 'email@server.com', example);
    expect(engineer.getGithub()).toBe(example);
});

//getRole()
test("sets engineer's role to 'Engineer'", () => {
    const engineer = new Engineer('Scotty');
    expect(engineer.role).toBe('Engineer');
});