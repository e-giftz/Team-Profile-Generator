// Links to classes function
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

const generateHTML = require('./Develop/src/generateHTML');


const inquirer = require('inquirer');
const fs = require('fs');

const teamEmployees = [];


const managerPrompt = () => {
  return new Promise((res) => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name: ",
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please enter a valid name for the team manager; ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID?: ",
        validate: id => {
          if (id) {
            return true;
          } else {
            console.log('Please enter the employee ID for the team manager: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email for the team manager?',
        validate: function (email) {
          const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
            return true;
          } else {
            console.log('Please enter an email: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number for the team manager: ',
        validate: function (value) {
          const valid = !isNaN(parseInt(value));
          return valid || "Please enter a valid office number";
        }
      }
    ])
      .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamEmployees.push(manager);
        res();
      });

  });
}

// Prompt to add other employees
const addNewEmployee = () => {
  return new Promise((resolve) => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Do you want to add other team members? Select from the list',
        choices: [
          "Engineer",
          "Intern",
          { 
            name: "Finish building my team", 
            value: false
          }
        ]

      },
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?: ",
        when: ({role}) => role === "Engineer",
        validate: username => {
          if (username) {
            return true;
          } else {
            console.log('Please enter a valid name for the Engineer: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter an employee ID for the engineer: ',
        when: ({ role }) => role === "Engineer",
        validate: function (value) {
          const valid = !isNaN(parseInt(value));
          return valid || "Please enter a valid employee ID for the engineer";
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email for the Engineer?',
        when: ({role}) => role === "Engineer",
        validate: function (email) {
          const valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log('Please enter an email: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username for the Engineer?',
        when: ({role}) => role === "Engineer"
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?: ",
        when: ({role}) => role === "Intern",
        validate: username => {
          if (username) {
            return true;
          } else {
            console.log('Please enter a valid name for the Intern: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter an employee ID for the intern: ',
        when: ({ role }) => role === "Intern",
        validate: function (value) {
          const valid = !isNaN(parseInt(value));
          return valid || "Please enter a valid employee number";
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email for the Intern?',
        when: ({role}) => role === "Intern",
        validate: function (email) {
          const valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log('Please enter an email: ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        when: ({role}) => role === "Intern",
        message: 'Please enter the school name for the Intern: '
      }
    ])
    .then(answers => {
      if (answers.role) {
        switch (answers.role){
          case "Engineer":
            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
            teamEmployees.push(engineer);
            break;
          case "Intern":
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamEmployees.push(intern);
            break;

        }
        return addNewEmployee().then(() => resolve());
        
      } else {
        return resolve();
      }
    })
  });
}

const writeFile = data => {
  fs.writeFile('./Develop/dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully created your Team Profile Page!");
    }
  })
}

managerPrompt()
.then(() => {
  return addNewEmployee();
})
.then(() => {
  const renderHTML = generateHTML(teamEmployees);
  writeFile(renderHTML);
})
.catch((err) => {
  console.log(err);
})
