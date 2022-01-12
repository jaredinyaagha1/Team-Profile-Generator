const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function init() {
    console.log("")
    console.log("Welcome to the Team Profile Generator!")
    console.log("Use `npm run reset` to reset the dist/ folder")
    console.log("")
    console.log("Please build your team!")
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "What is the Team Manager's name? ",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Team Manager's id? ",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Team Manager's email? ",
            },
        ])
        .then((response) => {
            if (response) createManager();
        });
}

function createManager() {
    console.log("Creating Manager . . .");

}

init();