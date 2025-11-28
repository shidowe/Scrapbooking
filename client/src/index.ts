import {div, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar";
import {page, pageFromJson} from "./page/page";

document.addEventListener("DOMContentLoaded", () => {

    TurboIcon.config.defaultDirectory = "assets";

    navBar({ parent: document.body });
    loginForm({ //get parameters from session or something
        parent: document.body.querySelector("#form-div"),
    });
    pageFromJson(0, { parent: document.body });
});