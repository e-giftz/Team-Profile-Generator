const fs = require("fs");
// Generate HTML
generateHTML = (data) => {

    pageArrayHTML = [];

    pageArrayHTML.push(data.filter(employee => employee.getRole() === "Manager")
        .map(manager => addManagerHTML(manager))

    );
    pageArrayHTML.push(data.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => addEngineerHTML(engineer))

    );
    pageArrayHTML.push(data.filter(employee => employee.getRole() === "Intern")
        .map(intern => addInternHTML(intern))

    );
    const employeeCards = pageArrayHTML.join('');
    return generateTeamHTML(employeeCards);

}

// Add the manager user input to html 
const addManagerHTML = function (manager) {
    return `
    <div class="card employee-card" id="manager-card" style="width: 20rem;">
        <div class="card-header bg-info">
            <h3 class="card-title">${manager.name}</h3>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">E-mail: <a
                    href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

const addEngineerHTML = function (engineer) {
    return `
    <div class="card employee-card" id="engineer-card" style="width: 20rem;">
        <div class="card-header bg-info">
            <h3 class="card-title">${engineer.name}</h3>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a
                        href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank"
                                    rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
}

const addInternHTML = function (intern) {
    return `
    <div class="card employee-card" id="intern-card" style="width: 20rem;">
        <div class="card-header bg-info">
            <h3 class="card-title">${intern.name}</h3>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a
                        href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

const generateTeamHTML = function(teamCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../src/fontawesome-free-5.15.3-web/css/fontawesome.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-warning bg-warning mb-5" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" style="font-size: 43px;">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${teamCards}
            </div>
        </div>

    </main>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
    `;
}

module.exports = generateHTML;

