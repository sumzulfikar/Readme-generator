const inquirer = require('inquirer');
const fs = require('fs');




console.log(`Hi! Tell us more about your project and 
build an automatic readme.
You will be promted with a series
of questions. 
Just answer the questions
and beautiful readme file will be generated. Isn't that easy!`);

const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "input",
    name: "Description",
    message:"Enter a description of your project:"

    },
    {
    type: "input",
    name: "Installation",
    message:"Enter installation guide details:"

    },
    {
    type: "input",
    name: "Usage",
    message:"Enter details on your project usage:"

    },
    { 
    type:"checkbox",
    name:"License",
    message:"Select license type:",
    choices:["none","Apache-2.0","GPL","ISC","Node","MIT"
    ]

    },
    {
        type: "input",
        name: "Contributing",
        message:"Describe how others could contribute to this project:"
    
        },
    {
        type: "input",
        name: "Tests",
        message:"Enter how to test the project:"
        
    },
    {
        type: "input",
        name: "Email",
        message:"Enter your email address:"
        
    },
    {
        type: "input",
        name: "githubUser",
        message:"Enter your github user name"
        
    },
    {
        type: "input",
        name: "githublink",
        message:"Enter your github link"
        
    },
    {
        type: "input",
        name: "contact",
        message:"Enter how you can be contacted"
        
    },


]

 

  inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
console.log(answers.title);
    //Creates a Read me file for the user based on answer
 const readmeContent=`
 # Project Title: ${answers.title}
 ## Description
    ${answers.Description}
 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#Questions)

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contributing}

## Questions
${answers.contact}
[${answers.githubUser}](${answers.githublink})
${answers.Email}
    `

    fs.writeFile("Sample_Read_Me.md", readmeContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  });
