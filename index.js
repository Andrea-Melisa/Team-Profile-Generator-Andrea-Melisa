const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const listofTeam = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array of questions for employee (parent)
const employeeQuestions = [
    {
        type: "input",
        message: `What is your role's name?`,
        name: "name",
    },
    {
        type: "input",
        message: `What is your role's id?`,
        name: "id",
    },
    {
        type: "input",
        message: `What is your role's email address?`,
        name: "email",
    }
];


// additional question for new Manager
const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    }
];

// additional questions for adding new Engineer
const engineerQuestions = [

    {
        type: "input",
        name: "github",
        message: "What is your engineer's github username?",
    }
];

// additional question & options for selecting new employee type

const selectEmployeeType = [
    {
        type: "list",
        name: "add",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ],
    }
];

// additional questions for adding new Intern
const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What is your intern's school?",
    }
];

function init() {
    console.log ("Please create your team:")
    inquirer.prompt(employeeQuestions).then((answers) => {
        console.log(answers);
        addManager();
        });

};

function addManager(){
    inquirer.prompt(managerQuestions).then((answers) => {
        console.log(answers);  
        // new instance of a manager
        // add to the array listofTeam
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        listofTeam.push(manager);
        options();
    });
    // .catch((err) => console.error(err));
};

function addEngineer(){
    inquirer.prompt(employeeQuestions).then((answers) => {
        console.log(answers);
        inquirer.prompt(engineerQuestions).then((answers) => {
            console.log(answers);
            // new instance of a engineer
            // add to the array listofTeam
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            listofTeam.push(engineer);
        options()
        });
    });
    // .catch((err) => console.error(err));
};

function addIntern(){
    inquirer.prompt(employeeQuestions).then((answers) => {
        console.log(answers);
        inquirer.prompt(internQuestions).then((answers) => {
            console.log(answers);
            // new instance of a engineer
            // add to the array listofTeam
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            listofTeam.push(intern);
        options()
        });
    });
    // .catch((err) => console.error(err));
};

function options() {
    inquirer.prompt(selectEmployeeType).then((answers) => {
        console.log(answers);
        if (answers.add === 'Engineer') {
            addEngineer()
        }
        else if (answers.add === "Intern"){
            addIntern()
        }
        else{
            console.log("Finish ... here we create the html file");
            createHTML();
        };
    });
};

function createHTML(){
    const html = render(listofTeam);
    fs.writeFileSync(outputPath, html);
    console.log('HTML file generated successfully!');
};

// function call to initialize program
init();

