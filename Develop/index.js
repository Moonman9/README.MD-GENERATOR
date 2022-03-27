// TODO: Include packages needed for this application
const fs = require('fs'); // enables interaction with file system
var inquirer = require('inquirer'); //package required to interract with questions in the console
const markdown = require('./utils/generateMarkdown'); //page link to fire functions for cleaner code

// TODO: Create an array of questions for user input
const questions = () => {
    
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please provide an accurate title for the project:',
                name: 'title',
                validate: validInput => {
                    if(validInput) {
                        return true;
                    } else {
                        console.log('Please enter a proper app title')
                    } 
                }
            },
            {
                type: 'input',
                message: 'Please provide a description of the app:',
                name: 'description',
                validate: validInput => {
                    if(validInput) {
                        return true;
                    } else {
                        console.log('Please enter a breif description for this app')
                    } 
                }
            },
            {
                type: 'input',
                message: 'Please provide installation instructions to run this project if applicable:',
                name: 'installation',
                default: 'No neccesary installation packages'
            },
            {
                type: 'input',
                message: 'Please explain how the user should utalize this app:',
                name: 'utalization',
                validate: validInput => {
                    if(validInput) {
                        return true;
                    } else {
                        console.log('Please provide instructions and examples so users can use the project:')
                    } 
                }
            },
            {
                type: 'input',
                message: 'Please include project contributers and provide their Github profile links. Also provide any resources (w/ links) utalized to complete this project:',
                name: 'contributions',
                default: 'Im a wizard! I conjured this from my head!'
            },
            {
                type: 'input',
                message: 'Please provide testing instuctions if applicable:',
                name: 'testing',
                default: 'No tests to run'
            },
            {
                type: 'list',
                message: 'Please choose a license you would like to include for this app:',
                name: 'license',
                choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3']
            },
            {
                type: 'input',
                message: 'Please provide a GitHub user name:',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Please provide an email that can be used for application inquiries',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please provide proper iunstructions on how to best reach you:',
                name: 'contact'
            }
        ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions((data) =>{
        console.log(data)
    })
    .catch((err) => {
        if (err) {
            console.log('error')
        }
    })
}

// Function call to initialize app
init();
