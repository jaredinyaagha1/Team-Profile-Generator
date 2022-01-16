const generateHTML = require('./src/generateHTML')

const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray = [];

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
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Team Manager's office number? ",
            },
        ])
        .then(managerInfo => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerInfo;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
        });
}


init();