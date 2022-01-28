const Intern = require('../lib/Intern');

test(" properly creates employee object", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
});

test("able to set name via constructor argument", () => {
    const testName = "Michael";
    const e = new Intern(testName);
    expect(e.name).toBe(testName);
});

test("able to set id via constructor argument", () => {
    const testId = 777;
    const e = new Intern("FooB", testId);
    expect(e.id).toBe(testId);
});

test("able to set email via constructor argument", () => {
    const testEmail = "michael@pascuzzi.com";
    const e = new Intern("Boofar", 777, testEmail);
    expect(e.email).toBe(testEmail)
});

test("able to get role via getRole()", () => {
    const testRole = "Intern";
    const e = new Intern("Boofar", 777, testRole);
    expect(e.getRole()).toBe(testRole);
});

test("able to get School via getSchool()", () => {
    const testSchool = "Georgia Institute of Technology";
    const e = new Intern("Foofar", 777, "zimbonts@jones.com", testSchool);
    expect(e.getSchool()).toBe(testSchool);
});