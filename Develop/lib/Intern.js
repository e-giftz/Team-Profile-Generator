const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        // Calling constructor from Employee class using the Super keyword
        super (name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;