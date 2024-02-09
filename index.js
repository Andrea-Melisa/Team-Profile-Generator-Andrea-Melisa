const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


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
