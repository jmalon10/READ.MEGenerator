//---------------------------DEPENDENCIES-------------------------------------------------------------------------//
import inquirer from 'inquirer';
import fs from 'fs';

//---------------------------FUNCTIONS----------------------------------------------------------------------------//
const getLicenseBadge = (license) => {
  const licenseBadges = {
    'GNU AGPLv3': 'https://img.shields.io/badge/license-GNU%20AGPLv3-blue.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg',
    'GNU LGPLv3': 'https://img.shields.io/badge/license-GNU%20LGPLv3-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/license-Apache%202.0-orange.svg',
    'MIT License': 'https://img.shields.io/badge/license-MIT-yellow.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/license-Boost%201.0-lightblue.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-red.svg',
  };
  return licenseBadges[license] || '';
};

//---------------------------USER INTERACTIONS--------------------------------------------------------------------//
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title of your application:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'Please enter Usage Information for your application. Provide instructions and examples for use:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license did you use for this project?',
      name: 'license',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'Please enter Contribution Guidelines for your application:',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'Please enter Test Instructions for your application:',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'github',
    },
  ])
  .then((response) => {
    // Get the badge for the selected license
    const licenseBadge = getLicenseBadge(response.license);

    // Provide a readMe file template
    const readMe = `  
![License Badge](${licenseBadge})

# ${response.title} 

## Description
${response.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.instructions}
## Usage
${response.usage}
## License
${response.license}
## How to Contribute
${response.guidelines}
## Tests
${response.test}
## Questions
Please contact me via email for any further questions [here](mailto:${response.email}) or find me on GitHub [here!](https://github.com/${response.github})
`;

    // Write the README file
    fs.writeFile('README.md', readMe, (err) => 
      err ? console.error(err) : console.log('Congratulations! Your customized professional README file is now ready!')
    );
  });

//---------------------------INITIALIZATOINS----------------------------------------------------------------------//