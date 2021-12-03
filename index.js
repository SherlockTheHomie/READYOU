// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to write README file
function writeToFile(README, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of this application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe this applications purpose and function?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What does the user need to access this application?',
        name: '',
    },
    {
        type: 'input',
        message: 'How can one use this application?',
        name: '',
    },
    {
        type: 'input',
        message: 'What is your github usermame?',
        name: 'user',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailaddress',
    },
  ]);
  .then((response) => (${response.})
  

    fs.writeFile("README.md" , generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('success!')),

  );

  generateMarkdown (response) {
    return;
    '##Name'
    ${name}

  }
