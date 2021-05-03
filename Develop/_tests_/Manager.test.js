const Manager = require("../lib/Manager");

describe("Testing out Manager office Number function ", () => {
  it("should return Manager office number", () => {
    const managerOfficeNo = new Manager("David", 1, "ned@msn.com", 20);
    const result = managerOfficeNo.getOfficeNumber();
    expect(result).toEqual(expect.any(Number));
  });
});
describe("Testing out manager get role function ", () => {
  it("should return Manager role", () => {
    const managerRole = new Manager("David", 1, "ned@msn.com", 20);
    const result = managerRole.getRole();
    expect(result).toEqual("Manager");
  });
});
