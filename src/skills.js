import jsLogo from "./images/javascript_logo.png"
import cssLogo from "./images/CSS_logo.png"
import htmlLogo from "./images/html_logo.png"
import nodeLogo from "./images/node_logo.png"
import npmLogo from "./images/npm_logo.png"
import unrealLogo from "./images/unreal_logo.png"
import unityLogo from "./images/unity_logo.png"
import cplusLogo from "./images/C++_logo.png"
import cSharpLogo from "./images/C#_logo.png"

const htmlEle = document.getElementById("htmlLogo")
const cssEle = document.getElementById("cssLogo")
const jsEle = document.getElementById("jsLogo")
const nodeEle = document.getElementById("nodeLogo")
const npmEle = document.getElementById("npmLogo")
const unrealEle = document.getElementById("unrealLogo")
const unityEle = document.getElementById("unityLogo")
const cplusEle = document.getElementById("cPlusLogo")
const cSharpEle = document.getElementById("cSharpLogo")

function createSkillImages() {
    // Main Tech
    htmlEle.src = htmlLogo;
    cssEle.src = cssLogo;
    jsEle.src = jsLogo;
    nodeEle.src = nodeLogo;
    npmEle.src = npmLogo;
    // Secondary Tech
    unrealEle.src = unrealLogo;
    unityEle.src = unityLogo;
    cplusEle.src = cplusLogo;
    cSharpEle.src = cSharpLogo;
}

export {createSkillImages}