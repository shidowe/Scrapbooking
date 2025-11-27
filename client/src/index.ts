import {div, TurboIcon} from "turbodombuilder";
import {exampleComponent} from "./exampleComponent/exampleComponent";
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
    
    exampleComponent({ //get parameters from session or something
        parent: document.body.querySelector("#form-div"),
        data: {name: "Bob", age: 20}
    });


});