import coolcat from "./images/coolcat.jpg";
import happydog from "./images/dog.jpg";

//Work Variables
const projectOneImage = document.querySelector("#projectOneImage");

function updateWorkImages() {
    projectOneImage.src = happydog;
}

export {updateWorkImages}