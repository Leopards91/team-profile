const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Can set office number via constructor arguments", () => {
    const testValue = 10;
    const e = new Manager("Foo", 1, "chug@monsterenergy.com", 10);
    expect(e.officeNumber).toBe(testValue);
});

test("get office number via getOfficeNumber()", () => {
    const testValue = 10;
    const e = new Manager("Foo", 1, "chug@monsterenergy.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\" ", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "chug@monsterenergy.com");
    expect(e.getRole()).toBe(testValue);
});