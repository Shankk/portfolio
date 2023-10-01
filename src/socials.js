import githubIMG from "./images/github.png"
import linkedinIMG from "./images/linkedin.png"

function generateSocials(element,size) {
    const socials = document.createElement('div')
    socials.classList.add('socials')
    const githubHREF = document.createElement('a');
    const linkedinHREF = document.createElement('a');
    const github = document.createElement('img');
    const linkedin = document.createElement('img');

    githubHREF.href = "https://github.com/Shankk"
    githubHREF.target = "_blank"
    linkedinHREF.href = "#"
    linkedinHREF.target = "_blank"
    github.src = githubIMG
    github.width = github.height = size
    linkedin.src = linkedinIMG
    linkedin.width = linkedin.height = size

    githubHREF.appendChild(github)
    linkedinHREF.appendChild(linkedin)
    socials.appendChild(githubHREF)
    socials.appendChild(linkedinHREF)
    element.appendChild(socials)
}

export {generateSocials}