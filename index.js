const Employee = require("./Develop/lib/Employee");

// Initialize a new Employee object
const employee = new Employee();


const inquirer = require('inquirer');
const fs = require('fs');
const teamEmployees = [];

// create writeFile function using promises instead of a callback function
//const writeFileAsync = util.promisify(fs.writeFile);


const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please enter the team manager's name: ",
      validate: name => {
        if (name) {
          return true;
        }else {
          console.log('Please enter a valid name for the team manager; ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter your manager's ID: ",
      validate: id => {
        if (id) {
          return true;
        }else {
          console.log('Please enter the employee ID for the team manager: ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email for the team manager?',
      validate: email => {
        if (email) {
          return true;
        }else {
          console.log('Please enter an email: ');
          return false;
        }
      }
    }
    
  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
  })
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
1   
// Start playing
//game.play();