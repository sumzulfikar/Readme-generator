var inquirer = require('inquirer');

console.log(`Hi, tell us more about your project and 
let us build a readme, its is so easy!`);

const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "list",
    name: "Table of Contents",
    message: ""

    },
    {
    type: "input",
    name: "Installation",
    message:"Enter installation guide details"

    },
    {
    type: "input",
    name: "Usage",
    message:"Enter details on your project usage:"

    },


]

    
  
    

  

  inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
  });
