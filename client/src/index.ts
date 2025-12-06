import {div, TurboEventManager, TurboIcon} from "turbodombuilder";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";
import { gridBoard } from "./gridBoard/gridBoard";

TurboEventManager.instance.preventDefaultWheel =false;

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";
    document.body.setAttribute("style", "background:#4D7C8A; align-content-:center");

    navBar({ parent: document.body });

    gridBoard({ parent: document.body });


});