const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function init() {

    inquirer
        .prompt([{
            type: 'list',
            name: 'init',
            message: 'Would you like to create a Team Manager Profile?',
            choices: ['Yes', 'No'],
        }])
        .then((response) => {
            if (response !== 'No') createManager();
        });
}

function createManager() {
    console.log("yerr")
}

init();