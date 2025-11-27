import {div, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar";

document.addEventListener("DOMContentLoaded", () => {

    TurboIcon.config.defaultDirectory = "assets";

   /* div({
        parent: document.body,
        style: "background-color: red",
        text: "Hey"
    });
    */

    navBar({ parent: document.body });
    
    loginForm({ //get parameters from session or something
        parent: document.body.querySelector("#form-div"),
    });


});