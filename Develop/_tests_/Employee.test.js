const Employee = require("../lib/Employee");

describe("Testing out name function ", () => {
  it("should return Employee name", () => {
    const name = new Employee("David", 1, "ned@msn.com");
    const result = name.getName();
    expect(result).toEqual(expect.any(String));
  });
});
describe("Testing out id function ", () => {
  it("should return Employee id", () => {
    const id = new Employee("David", 1, "ned@msn.com");
    const result = id.getId();
    expect(result).toEqual(expect.any(Number));
  });
});
describe("Testing out email function ", () => {
  it("should return Employee email", () => {
    const email = new Employee("David", 1, "ned@msn.com");
    const result = email.getEmail();
    expect(result).toEqual(expect.any(String));
  });
});
describe("Testing out id function ", () => {
  it("should return Employee id", () => {
    const employee = new Employee("David", 1, "ned@msn.com");
    const result = employee.getRole();
    expect(result).toEqual("Employee");
  });
});
