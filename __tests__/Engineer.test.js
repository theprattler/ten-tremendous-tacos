const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Scotty');

    expect(engineer.name).toBe("Scotty");
    expect(engineer.github).toEqual(expect.any(String));

});

//getGithub()
test("gets engineer's github profile name", () => {
    const engineer = new Engineer('Scotty');

    expect(engineer.github).toEqual(expect.any(String));
});

//getRole()
test("sets engineer's role to 'Engineer'", () => {
    const engineer = new Engineer('Scotty');

    expect(engineer.role).toBe('Engineer');
});