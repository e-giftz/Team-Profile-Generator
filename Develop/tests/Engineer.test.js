const Engineer = require("../lib/Engineer");

describe("Testing out the github function ", () => {
  it("should return Engineer github username", () => {
    const github = new Engineer("David", 1, "ned@msn.com", "mygithubname");
    const result = github.getGithub();
    expect(result).toEqual(expect.any(String));
  });
});
describe("Testing out manager role function ", () => {
  it("should return Manager role", () => {
    const engineerRole = new Engineer("David", 1, "ned@msn.com", "mygithubname");
    const result = engineerRole.getRole();
    expect(result).toEqual("Engineer");
  });
});

