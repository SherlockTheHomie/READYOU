// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license === "Apache") {
  return ``
} else if (license === 'WTFPL') {
  return ``
} else if (license === 'MIT') {
  return ``
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

${license}

  ## Contact

Github Profile: https://github.com/${user}

Email Address: ${emailaddress}

`
};

module.exports = generateMarkdown;















