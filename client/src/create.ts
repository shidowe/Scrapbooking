import {div, TurboIcon} from "turbodombuilder";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";
    
    navBar({ parent: document.body });
});