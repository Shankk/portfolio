import todolist from "./images/todolist_Preview.png";
import battleship from "./images/battleship_Preview.png";
import weatherApp from "./images/weatherApp_Preview.png";
import knightTravails from "./images/knight_Preview.png";
import github from "./images/github.png";
import externalLink from "./images/external_link.png";

//Work Project Images
const projectOneImage = document.querySelector("#projectOneImage");
const projectTwoImage = document.querySelector("#projectTwoImage");
const projectThreeImage = document.querySelector("#projectThreeImage");
const projectFourImage = document.querySelector("#projectFourImage");
//Work Project Infos
const projectOneInfo = document.querySelector("#projectOneInfo");
const projectTwoInfo = document.querySelector("#projectTwoInfo");
const projectThreeInfo = document.querySelector("#projectThreeInfo");
const projectFourInfo = document.querySelector("#projectFourInfo");

const imageSize = 32;

function createWorkImages() {
    projectOneImage.src = todolist;
    projectTwoImage.src = battleship;
    projectThreeImage.src = weatherApp;
    projectFourImage.src = knightTravails;
}

function createProjectLinks(project, githubHREF, previewHREF) {
    const container = document.createElement("div");
    const githubLink = document.createElement("a");
    const githubImage = document.createElement("img");
    const previewLink = document.createElement("a");
    const previewImage = document.createElement("img");
    
    container.classList.add("links");
    githubLink.href = githubHREF;
    githubLink.target = "_blank";
    githubImage.classList.add("linkImg")
    githubImage.src = github;
    githubImage.width = imageSize;

    previewLink.href = previewHREF;
    previewLink.target = "_blank";
    previewImage.classList.add("linkImg")
    previewImage.src = externalLink;
    previewImage.width = imageSize;

    githubLink.appendChild(githubImage);
    previewLink.appendChild(previewImage);

    container.appendChild(githubLink);
    container.appendChild(previewLink);

    project.appendChild(container);
}

function createWorkLinks() {
    createProjectLinks(projectOneInfo, "https://github.com/Shankk/Todo-List", "https://shankk.github.io/Todo-List/")
    createProjectLinks(projectTwoInfo,"https://github.com/Shankk/battle-ship", "https://shankk.github.io/battle-ship/")
    createProjectLinks(projectThreeInfo, "https://github.com/Shankk/Weather-App", "https://shankk.github.io/Weather-App/")
    createProjectLinks(projectFourInfo, "https://github.com/Shankk/knight-travails", "https://shankk.github.io/knight-travails/")
}

export {createWorkImages, createWorkLinks}