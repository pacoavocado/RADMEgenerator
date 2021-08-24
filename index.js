const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your user name?',
            name: "username"
        },
        {
            type: 'input',
            message: 'what languages do you know?',
            name: "language"
        },
        {
            type: 'input',
            message: 'what is you preffered method of communication?',
            name: "preference"
        }
    ])
    .then((response) => {

    console.log('username', response.username)   
    console.log('language', response.language)
    console.log('preference', response.preference)
    fs.writeFile('README.md', JSON.stringify(response), (err) =>
    err ? console.error(err) : console.log("success?"))
    });
// copy this for the whole HW replace log.txt with README.md




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
