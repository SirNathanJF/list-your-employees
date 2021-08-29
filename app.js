const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee")
const generateHTML = require("./lib/renderHTML")

const outputDirectory = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDirectory, "team.html");
// empty array for our employee additions
const workforce = [];

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager office number?"
    }
];

function addManager() {
    console.log("Follow the prompts to set up your team page");
    inquirer.prompt(employeeQuestions).then(function(data){
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        workforce.push(manager);
        buildTeam();
    });
};

function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "positionChoice",
            message: "Which type of position would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(function(data){
        if (data.memberChoice === "Engineer"){
            buildEngineer();
        } else if (data.memberChoice === "Intern"){
            buildIntern();
        } else (outputTeam());
    });
}


