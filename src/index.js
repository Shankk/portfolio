import './styles.css'
import { generateSocials } from './socials';
import { createWorkImages , createWorkLinks } from './myWork';
import { createSkillImages } from './skills';
import coolcat from "./images/coolcat.jpg";

window.onscroll = function() {pageTransitions()};

var r = document.querySelector(':root');

const header = document.querySelector(".header");
const menu = document.querySelector("#menu");
const about = document.querySelector("#bio");
const aboutContainer = document.querySelector("#bioContainer");
const work = document.querySelector("#myWork");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");

const workProjectOne = document.querySelector("#projectOne");
const workProjectTwo = document.querySelector("#projectTwo");
const workProjectThree = document.querySelector("#projectThree");
const workProjectFour = document.querySelector("#projectFour");
const footer = document.querySelector(".footer");
// Get the offset position of the navbar
const sticky = header.offsetTop;

//Header Buttons
const sideBar = document.querySelector("#sideBarButton");
const changeTheme = document.querySelector("#changeTheme");
const aboutBtn = document.querySelector("#aboutButton");
const workBtn = document.querySelector("#workButton");
const skillsBtn = document.querySelector("#skillsButton");
const contactBtn = document.querySelector("#contactButton");

const bioImage = document.querySelector("#bioImg");
bioImage.src = coolcat;

changeTheme.addEventListener("click", (e) =>{
    if(changeTheme.className != "toggle") {
        changeTheme.classList.add("toggle");
        r.style.setProperty('--main-bg-color', '#161032');
        r.style.setProperty('--sec-bg-color', '#FFC53A');
        r.style.setProperty('--text-main-color', '#332E3C');
        r.style.setProperty('--text-sec-color', '#FAFF81');
    } else {
        changeTheme.classList.remove("toggle");
        r.style.setProperty('--main-bg-color', '#FFC53A');
        r.style.setProperty('--sec-bg-color', '#161032');
        r.style.setProperty('--text-main-color', '#FAFF81');
        r.style.setProperty('--text-sec-color', '#332E3C');
    }
    
});
sideBar.addEventListener("click", (e) => {
    if(menu.className != "toggle") {
        menu.classList.add("toggle");

    } else {
        menu.classList.remove("toggle");

    }
})
aboutBtn.addEventListener("click",  (e) => {
    about.scrollIntoView();
});
workBtn.addEventListener("click",  (e) => {
    work.scrollIntoView();
});
skillsBtn.addEventListener("click",  (e) => {
    skills.scrollIntoView();
});
contactBtn.addEventListener("click",  (e) => {
    contact.scrollIntoView();
});

function pageTransitions() {
    //Header Sticky
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else if (window.pageYOffset <= sticky) {
        header.classList.remove("sticky");
    }
    // Introduction
    if(window.pageYOffset > (aboutContainer.offsetTop + aboutContainer.offsetHeight)) {
        aboutContainer.classList.remove("moveUp")
    } else if(window.pageYOffset < (aboutContainer.offsetTop + aboutContainer.offsetHeight)) {
        aboutContainer.classList.add("moveUp")
    }
    // Work
    if(window.pageYOffset > (work.offsetTop - 300)) {
        workProjectOne.classList.add("moveLeft")
        workProjectTwo.classList.add("moveRight")
        workProjectThree.classList.add("moveLeft")
        workProjectFour.classList.add("moveRight")
    } else if (window.pageYOffset < (work.offsetTop - (work.offsetTop-100))) {
        workProjectOne.classList.remove("moveLeft")
        workProjectTwo.classList.remove("moveRight")
        workProjectThree.classList.remove("moveLeft")
        workProjectFour.classList.remove("moveRight")
    }
}

createWorkImages();
createWorkLinks();
createSkillImages();
generateSocials(menu,32);
generateSocials(footer,32);