const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Scotty');

    expect(engineer.name).toBe("Scotty");
    expect(engineer.github).toEqual(expect.any(String));

});