import './styles.css'
import { generateSocials } from './socials';
import coolcat from "./images/coolcat.jpg";

window.onscroll = function() {pageTransitions()};

let header = document.querySelector(".header");
let bio = document.querySelector("#bioContainer");
let work = document.querySelector("#myWork");
let workTop = document.querySelector("#workTopHalf");
let workBottom = document.querySelector("#workBottomHalf");
let footer = document.querySelector(".footer");
// Get the offset position of the navbar
let sticky = header.offsetTop;

let bioImage = document.querySelector("#bioImg");
console.log(bioImage)
bioImage.src = coolcat;

function pageTransitions() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else if (window.pageYOffset <= sticky) {
        header.classList.remove("sticky");
    }

    if(window.pageYOffset > (bio.offsetTop + bio.offsetHeight)) {
        bio.classList.remove("moveUp")
    } else if(window.pageYOffset < (bio.offsetTop + bio.offsetHeight)) {
        bio.classList.add("moveUp")
    }

    if(window.pageYOffset > (work.offsetTop - 300)) {
        workTop.classList.add("moveLeft")
        workBottom.classList.add("moveRight")
    } else if (window.pageYOffset < (work.offsetTop - (work.offsetTop-100))) {
        workTop.classList.remove("moveLeft")
        workBottom.classList.remove("moveRight")
    }
}

generateSocials(header,32)
generateSocials(footer,32)