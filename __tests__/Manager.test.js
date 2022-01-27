const Manager = require('../lib/Manager');

test(" properly creates employee object", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object")
});

test("able to set name via constructor argument", () => {
    const testName = "Michael";
    const e = new Manager(testName);
    expect(e.name).toBe(testName);
});

test("able to set id via constructor argument", () => {
    const testId = 777;
    const e = new Manager("FooB", testId);
    expect(e.id).toBe(testId);
});

test("able to set email via constructor argument", () => {
    const testEmail = "michael@pascuzzi.com";
    const e = new Manager("Boofar", 777, testEmail);
    expect(e.email).toBe(testEmail)
});

test("able to get role via getRole()", () => {
    const testRole = "Manager";
    const e = new Manager("Boofar", 777, testRole);
    expect(e.getRole()).toBe(testRole);
});

test("able to get OfficeNumber via getOfficeNumber()", () => {
    const testOfficeNumber = "9999999999";
    const e = new Manager("Foofar", 777, "zimbob@jones.com", testOfficeNumber);
    expect(e.getOfficeNumber()).toBe(testOfficeNumber);
});