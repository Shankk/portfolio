import todolist from "./images/todolist_Preview.png";
import battleship from "./images/battleship_Preview.png";
import weatherApp from "./images/weatherApp_Preview.png";
import knightTravails from "./images/knight_Preview.png";


//Work Variables
const projectOneImage = document.querySelector("#projectOneImage");
const projectTwoImage = document.querySelector("#projectTwoImage");
const projectThreeImage = document.querySelector("#projectThreeImage");
const projectFourImage = document.querySelector("#projectFourImage");

function createWorkImages() {
    projectOneImage.src = todolist;
    projectTwoImage.src = battleship;
    projectThreeImage.src = weatherApp;
    projectFourImage.src = knightTravails;
}

export {createWorkImages}