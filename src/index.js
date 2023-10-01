import './styles.css'
import { generateSocials } from './socials';

window.onscroll = function() {stickyHeader()};

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
// Get the offset position of the navbar
let sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else if (window.pageYOffset <= sticky) {
    header.classList.remove("sticky");
    }
}

generateSocials(header,32)
generateSocials(footer,32)