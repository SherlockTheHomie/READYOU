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

// README's are broken. I strongly advise not using a generator to make your readme. 


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

  ## Table of Contents

  - [Description](#description)
  - [System Requirements](#systemreqs)
  - [Directions](#directions)
  - [Contribution Guidelines](#conguide)
  - [License](#license)
  - [Contact](#user)

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















