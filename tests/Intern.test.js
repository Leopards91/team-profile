const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Rutgers";
  const e = new Intern("Foo", 1, "chug@monsterenergy.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "chug@monsterenergy.com", "Rutgers");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "chug@monsterenergy.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});