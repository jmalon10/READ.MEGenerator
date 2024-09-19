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

// function writeReadMe (answers)  {
//   fs.appendFile('READ.ME', `${response.description}\n`, (err) =>  
//     err ? console.error(err) : console.log('Description added!')
// ),
// fs.appendFile('READ.ME', `${response.instructions}\n`, (err) =>  
//     err ? console.error(err) : console.log('Installation Instructions added!')
// ),
// fs.appendFile('READ.ME', `${response.usage}\n`, (err) =>  
//     err ? console.error(err) : console.log('Usage Information added!')
// ),
// fs.appendFile('READ.ME', `${response.guidelines}\n`, (err) =>  
//     err ? console.error(err) : console.log('Contribution Guidelines added!')
// ),
// fs.appendFile('READ.ME', `${response.test}\n`, (err) =>  
//     err ? console.error(err) : console.log('Test Instructions added!')
// )
// };
//---------------------------INITIALIZATOINS----------------------------------------------------------------------//