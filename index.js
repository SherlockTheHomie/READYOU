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
        message: 'What does the user need to access this application?',
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
        type: 'checkbox',
        message: 'choose a free license',
        choices: [
            new inquirer.Separator('== License =='),
            {
                name: 'WTFPL',
            },
            {
                name: 'MIT',
            },
            {
                name: 'Apache'
            },
        ]
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
];

// TODO: Create a function to write README file
function writeToFile(README, data) { }


// TODO: Create a function to initialize app


// Function call to initialize app
init();






function init() { 
inquirer
    .prompt(questions)

    .then((data) => {
        const filename = `README.md`;
        
        fs.appendFile(filename, JSON.stringify(questions, null, `\t`), (err) =>
            err ? console.error(err) : console.log('success!')
        );
    });

}
// generateMarkdown(response) {
//     return;
//     '##Name'
//     ${ name }

// }
