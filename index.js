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
        message:"Enter how other can contribute to your project:"
    
        },
    {
        type: "input",
        name: "Tests",
        message:"Enter how to test the project:"
        
    },



]

    
  

  inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
console.log(answers.title);
    //Creates a Read me file for the user based on asnwer
    // const readmeContent=`
    // ##${questions.name[0]}`

    fs.writeFile("Read_Me.md", 'Your Read me is', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  });
