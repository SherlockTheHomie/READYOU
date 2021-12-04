// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  const {
    license,
  } = answers;
if (license === 'Apache') {
  return `
  ![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `
} else if (license === 'WTFPL') {
  return `
  ![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
  `
} else if (license === 'MIT') {
  return `
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  `
};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const{
    title,
    description,
    systemreqs,
    directions,
    conguide,
    license,
    user,
    emailaddress,
  } = answers;
  
return `
${title}
========

  ## Description

${description}

  ## System Requirements

${systemreqs}

  ## Directions

${directions}

  ## Contribution Guidelines

${conguide}

  ## License
${renderLicenseBadge(answers)}
${license}

  ## Contact

Github Profile: https://github.com/${user}

Email Address: ${emailaddress}

`
};

module.exports = generateMarkdown;















