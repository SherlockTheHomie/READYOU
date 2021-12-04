// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
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
        message: 'What does the user need to run this application?',
        name: 'systemreqs',
    },
    {
        type: 'input',
        message: 'How can one use this application?',
        name: 'directions',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'conguide',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose a free license',
        choices: [
            {
            name: "WTFPL",
            },
            { 
            name: "Apache",
            },
            { 
            name: "MIT",
            },
        ],
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
    {
        type: 'input',
        message: 'Please enter the filepath where you would like this readme to be created',
        name: 'filepath',
    },
];

// TODO: Create a function to write README file
// function writeToFile(README, data) {
//     generateMarkdown
//  }


// TODO: Create a function to initialize app


// Function call to initialize app
init();






function init() {

inquirer
    .prompt(questions)

    .then((answers) => {
        const filename = `README.md`;

        fs.writeFile(filename, generateMarkdown(answers), (err) =>
            err ? console.error(err) : console.log('success!')
        );
});
}