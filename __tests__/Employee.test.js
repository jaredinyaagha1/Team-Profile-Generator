const Employee = require('../lib/Employee');

test(" properly creates employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test("able to set name via constructor argument", () => {
    const name = "Michael";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("able to set id via constructor argument", () => {
    const testId = 777;
    const e = new Employee("FooB", testId);
    expect(e.id).toBe(testId);
});

test("able to set email via constructor argument", () => {
    const testEmail = "michael@pascuzzi.com";
    const e = new Employee("Boofar", 777, testEmail);
    expect(e.email).toBe(testEmail)
});

test("able to get name via getName()", () => {
    const name = "Michael";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("able to get id via getId()", () => {
    const testId = 777;
    const e = new Employee("FooB", testId);
    expect(e.getId()).toBe(testId);
});

test("able to get email via getEmail()", () => {
    const testEmail = "michael@pascuzzi.com";
    const e = new Employee("Boofar", 777, testEmail);
    expect(e.getEmail()).toBe(testEmail)
});

test("able to get role via getRole()", () => {
    const testRole = "Employee";
    const e = new Employee("Boofar", 777, testEmail);
    expect(e.email).toBe(testRole);
});