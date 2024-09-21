//---------------------------DEPENDENCIES-------------------------------------------------------------------------//
import inquirer from 'inquirer';
import fs from 'fs';
//---------------------------DATA/STATE---------------------------------------------------------------------------//
//---------------------------FUNCTIONS----------------------------------------------------------------------------//
//---------------------------USER INTERACTIONS--------------------------------------------------------------------//
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter a Description of your application:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter Installation Instructions for your application:',
      name: 'instructions',
      },
    {
      type: 'input',
      message: 'Please enter Usage Information for your application:',
      name: 'usage',
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
  ])
  .then((response) => {
    JSON.stringify(response)
     const readMe = `
# <Your-Project-Title>

## Description

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

## Usage

## License

## Features

## Contributing

## Tests

## Questions
`

  fs.writeFile('README.md', readMe, (err) => 
    err ? console.error(err) : console.log('Congratulations! Your costomized professional README file is now ready!')
  )}
  );


//---------------------------INITIALIZATOINS----------------------------------------------------------------------//