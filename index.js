const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your README.md title?',
            name: "title",
            validate: (value)=>{if(value){return true} else {return 'yo! dis yo baby u gotta give it a name bro'}}
        },
        {
            type: 'input',
            message: 'what is your project about?',
            name: "about",
            validate: (value)=>{if(value){return true} else {return 'yo! dis yo baby u gotta give it a name bro'}}
        },
        {
            type: 'input',
            message: 'how do you install your app?',
            name: "installation",
            validate: (value)=>{if(value){return true} else {return 'yo! help me, help you!'}}
        },
        {
            type: 'input',
            message: 'are there any special instructions?',
            name: "instructions",
            validate: (value)=>{if(value){return true} else {return "yo! it ain't boobytraped is it?"}}
        },
        {
            type: 'input',
            message: 'please list authors?',
            name: "authors",
            validate: (value)=>{if(value){return true} else {return 'yo! give credit where is due'}}
        },
        {
            type: 'input',
            message: 'what uses does your app fulfill?',
            name: "uses",
            validate: (value)=>{if(value){return true} else {return "yo! what it do? that's all we want to know"}}
        },
        {
            type: 'list',
            message: 'what frameworks did you use?',
            name: "frameworks",
            choices: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "n/a"],
            validate: (value)=>{if(value){return true} else {return "yo! how you code'n with-out a framework?"}}
        },
        {
            type: 'list',
            message: 'what license did you use?',
            name: "license",
            choices: ["The MIT License", "The GPL License","Apache license", "GNU License", "n/a"],
            validate: (value)=>{if(value){return true} else {return 'yo! the authorities have been notified...'}}
        },
        {
            type: 'input',
            message: 'what is your GitHub username?',
            name: "gitname",
            validate: (value)=>{if(value){return true} else {return 'yo! new repo who dis?'}}
        },
        {
            type: 'input',
            message: 'what is your email?',
            name: "email",
            validate: (value)=>{if(value){return true} else {return 'yo! get ready for all kinds of fishing msgs'}}
        }
        
    ])
    .then((response) => {

        const fileName = `README.md`;

        const readMeString = `<details open="open">
        <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
        <ol>
          <li>
            <a href="#about-the-project">About The Project</a>
            <ul>
              <li><a href="#built-with">Built With</a></li>
            </ul>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
              <li><a href="#prerequisites">Prerequisites</a></li>
              <li><a href="#installation">Installation</a></li>
            </ul>
          </li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#license">License</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#acknowledgements">Acknowledgements</a></li>
        </ol>
      </details>
       
      # ${response.title}
      

      
      ## About The Project
     
        ${response.about}
    
      ### Built With
      
      * ${response.frameworks}
      
      
      <!-- GETTING STARTED -->
      ## Getting Started
      
     ${response.instructions}
      
      ### Prerequisites
      
     
      ### Installation

        ````
      ${response.installation}
      ````
           
      ## Authors

        ${response.authors}

      ## Usage
      
        ${response.uses} 

      ## Created by ${response.gitname} on GitHub with node.js  
      
      ## License
      
      Distributed under ${response.license}. See LICENSE for more information.
      
      
      
      ## Contact
        ${email}`;

        // createNewFile()

    fs.writeFile(fileName, readMeString), (err) =>
    err ? console.error(err) : console.log("success?")
    });
// copy this for the whole HW replace log.txt with README.md




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
