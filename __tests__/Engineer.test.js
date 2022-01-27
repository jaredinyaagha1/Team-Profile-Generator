const Engineer = require('../lib/Engineer');

test(" properly creates employee object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object")
});

test("able to set name via constructor argument", () => {
    const testName = "Michael";
    const e = new Engineer(testName);
    expect(e.name).toBe(testName);
});

test("able to set id via constructor argument", () => {
    const testId = 777;
    const e = new Engineer("FooB", testId);
    expect(e.id).toBe(testId);
});

test("able to set email via constructor argument", () => {
    const testEmail = "michael@pascuzzi.com";
    const e = new Engineer("Boofar", 777, testEmail);
    expect(e.email).toBe(testEmail)
});

test("able to get role via getRole()", () => {
    const testRole = "Engineer";
    const e = new Engineer("Boofar", 777, testRole);
    expect(e.role).toBe(testRole);
});

test("able to get GitHub via getGitHub()", () => {
    const testGitHub = "https://github.com/jaredinyaagha1";
    const e = new Engineer("Foofar", 777, testGitHub);
    expect(e.github).toBe(testGitHub);
});
