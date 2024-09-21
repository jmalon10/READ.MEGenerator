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
  ])
  .then((response) => {
    const answers = JSON.stringify(response, null, ``);
    console.log(answers)
  }
  );


//---------------------------INITIALIZATOINS----------------------------------------------------------------------//