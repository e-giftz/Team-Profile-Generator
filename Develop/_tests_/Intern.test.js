const Intern = require("../lib/Intern");

describe("Testing out the getschool() function ", () => {
  it("should return Intern school name", () => {
    const school = new Intern("David", 1, "ned@msn.com", "myschool");
    const result = school.getSchool();
    expect(result).toEqual(expect.any(String));
  });
});
describe("Testing out Intern role function ", () => {
  it("should return Intern role", () => {
    const internRole = new Intern("David", 1, "ned@msn.com", "mygithubname");
    const result = internRole.getRole();
    expect(result).toEqual("Intern");
  });
});
