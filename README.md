# Team Profile Generator Andrea Melisa

  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This here is the challenge number ten from the bootcamp. In this case I want to create a command-line application that will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Acceptance Criteria

* Create a command-line application that accepts accepts user input using the provided starter code.   
  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Credits](#credits)
  7. [Badges](#badges)
  8. [Questions](#questions)

  ## Installation
  n/a

  ## Usage
  Execute "node index.js" in the terminal.
 
  Here you have a screenshot of the HTML generated:

![web intro](/Team-Profile-Generator-Andrea-Melisa/assets/Screenshot.png)


**Here is the link to this project** https://github.com/Andrea-Melisa/Team-Profile-Generator-Andrea-Melisa

  ## License 
  This project is licensed under the MIT license.

  ## Contributing
  Yes.

  ## Tests
  No specific tests have been written for this project yet.

  ## Credits
  Thanks to the instructor Laura Cole and to the TA Martin William from EDX for all their knowledge and support. Thank you for the tutor Juan Delgado and a big thank you to Marcos Z. as allways.

  ## Badges
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Node.js](https://img.shields.io/badge/Node.js-v14-green)](https://nodejs.org/)
  [![Git](https://img.shields.io/badge/Git-v2.32-blue)](https://git-scm.com/)

  ## Questions
  If you have any questions about this repo you can contact me directly at [andream_dearth@hotmail.com](mailto:andream_dearth@hotmail.com). Here you can find more of my work at [Andrea-Melisa](https://www.github.com/Andrea-Melisa).
