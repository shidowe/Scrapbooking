import {div} from "turbodombuilder";
import {exampleComponent} from "./exampleComponent/exampleComponent";

document.addEventListener("DOMContentLoaded", () => {

   /* div({
        parent: document.body,
        style: "background-color: red",
        text: "Hey"
    });

    */

    exampleComponent({ //get parameters from session or something
        parent: document.body.querySelector("#form-div"),
        data: {name: "Bob", age: 20}
    });
});