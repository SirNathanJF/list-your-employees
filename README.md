# Week 10 Homework- Team Profile Generator
![License](https://img.shields.io/badge/license-GPLv3-blue)


## Instructions/User Story/Requirements

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

### User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Directory
* [Installation](#installation)
* [Usage](#usage)
* [Resources](#resources)
* [License](#license)
* [Questions](#questions)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
To install this application:
    1. Clone the repository on your local machine
    2. After cloning make sure to run ```npm i inquirer``` and ```npm i jest```, though ```npm i``` should work since I have included both in the dependencies.

## Usage
This program is fantastic for making quick HTML pages to keep track of everyone on their team and contact information. The HTML pages used bulma for some quick styling and to ensure responsiveness. 

<img src="https://raw.githubusercontent.com/SirNathanJF/list-your-employees/main/src/assets/generated-page-screenshot.PNG" alt="example" width="1000" height="500">

[Video Link](https://drive.google.com/file/d/1fcU_67cnxh-olR4zqNBtI4wLHgqPVhQq/view?usp=sharing)

## Resources
![HTML5](https://img.shields.io/static/v1?style=for-the-badge&message=HTML5&color=E34F26&logo=HTML5&logoColor=FFFFFF&label=)
![CSS3](https://img.shields.io/static/v1?style=for-the-badge&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=)
![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![Bulma](https://img.shields.io/static/v1?style=for-the-badge&message=Bulma&color=222222&logo=Bulma&logoColor=00D1B2&label=)
![Node](https://img.shields.io/static/v1?style=for-the-badge&message=NodeJS&color=222222&logo=NodeJS&logoColor=00D1B2&label=)
![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=222222&logo=Jest&logoColor=00D1B2&label=)
![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=222222&logo=npm&logoColor=00D1B2&label=)

## License
MIT License
Copyright (c) 2021, Nathan Flessner
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
For more information, please refer to <https://tlo.mit.edu/>

## Questions
If you have any questions or concerns reach me on [Github](https://github.com/SirNathanJF) or through email at <nathanflessner1@gmail.com>

## Contributing
No contributions at this time!

## Tests
There is currently no further testing being done on this application. 


