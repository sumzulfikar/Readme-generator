// function to generate markdown for README
function generateMarkdown(answers) {
  const readmeContent=`
  ![Static Badge](https://img.shields.io/badge/${answers.License}-yellow)

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

     return readmeContent;
}

module.exports = generateMarkdown;
