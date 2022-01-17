// crea
const generateManager = function (manager) {
    return `
    
    `
}

const generateEngineer = function (engineer) {
    return `
    
    `
}

const generateIntern = function (intern) {
    return `
    
    `
}

generateHTML = (data) => {

    pageArray = [];


    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return `
    
    
    `;
}

module.exports = generateHTML;