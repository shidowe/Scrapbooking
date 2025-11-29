import {div, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";
    document.body.setAttribute("style", "background:#4D7C8A; align-content-:center");

    page({parent:document.body});
    page({parent:document.body});
    navBar({ parent: document.body });
});