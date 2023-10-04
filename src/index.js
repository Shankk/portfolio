import './styles.css'
import { generateSocials } from './socials';
import { updateWorkImages } from './myWork';
import coolcat from "./images/coolcat.jpg";

window.onscroll = function() {pageTransitions()};

var r = document.querySelector(':root');
let icon = document.querySelector(".Icon")

let header = document.querySelector(".header");
let menu = document.querySelector(".menu")
let bio = document.querySelector("#bioContainer");
let work = document.querySelector("#myWork");
let workTop = document.querySelector("#workTopHalf");
let workBottom = document.querySelector("#workBottomHalf");
let workProjectOne = document.querySelector("#projectOne")
let workProjectTwo = document.querySelector("#projectTwo")
let workProjectThree = document.querySelector("#projectThree")
let workProjectFour = document.querySelector("#projectFour")
let footer = document.querySelector(".footer");
// Get the offset position of the navbar
let sticky = header.offsetTop;

//Header Buttons
const changeTheme = document.querySelector("#changeTheme");
const workBtn = document.querySelector("#workButton");
const skillsBtn = document.querySelector("#skillsButton");
const contactBtn = document.querySelector("#contactButton");

let bioImage = document.querySelector("#bioImg");
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

workBtn.addEventListener("click",  (e) => {
    work.scrollIntoView();
});

skillsBtn.addEventListener("click",  (e) => {
    //work.scrollIntoView();
});

contactBtn.addEventListener("click",  (e) => {
    //work.scrollIntoView();
});

function pageTransitions() {
    //Header Sticky
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else if (window.pageYOffset <= sticky) {
        header.classList.remove("sticky");
    }
    // Introduction
    if(window.pageYOffset > (bio.offsetTop + bio.offsetHeight)) {
        bio.classList.remove("moveUp")
    } else if(window.pageYOffset < (bio.offsetTop + bio.offsetHeight)) {
        bio.classList.add("moveUp")
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

updateWorkImages()
generateSocials(menu,32)
generateSocials(footer,32)