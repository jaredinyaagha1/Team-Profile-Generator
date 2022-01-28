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
    return inquirer
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
        .then((managerInfo) => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerInfo;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        });
};

const addMember = () => {
   return inquirer
        .prompt([{
                type: 'list',
                name: 'role',
                message: "Please choose your employee's role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the Employee's name? ",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id? ",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Employee's email? ",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school.",
                when: (input) => input.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: "Would you like to add more team members?",
                default: false
            }
        ])
        .then((employeeInfo) => {
            // data 

            let {
                name,
                id,
                email,
                role,
                github,
                school,
                confirmAddEmployee
            } = employeeInfo;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                // console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                // console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addMember(teamArray);
            } else {
                return teamArray;
            }
        })
};


// // function to generate HTML page file using file system 
// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         // if there is an error 
//         if (err) {
//             console.log(err);
//             return;
//             // when the profile has been created 
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// };

// init();

init()
  .then(addMember)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return htmlGen(teamArray);
  })
  .catch(err => {
 console.log(err);
  });

function htmlGen(array) {
    fs.writeFile('./dist/index.html', generateHTML(array), (err) =>
    err ? console.log(err) : console.log("Your team profile has been successfully created! Please check out the index.html"));
}