const Manager = require('../lib/Manager');

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

test("able to get OfficeNumber via getOfficeNumber()", () => {
    const testOfficeNumber = "9999999999";
    const e = new Engineer("Foofar", 777, testOfficeNumber);
    expect(e.github).toBe(testOfficeNumber);
});