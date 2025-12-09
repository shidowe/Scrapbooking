import {div, p, TurboEventManager, TurboIcon} from "turbodombuilder";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";
import { gridBoard } from "./gridBoard/gridBoard";
import "./style.css";

TurboEventManager.instance.preventDefaultWheel =false;

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";
    //document.body.setAttribute("style", "background:#4D7C8A; align-content-:center");

    navBar({ parent: document.body });

    gridBoard({ parent: document.body });

    div({ parent: document.body, classes:"footer" });

    let footer_text = p({parent: document.querySelector(".footer") as HTMLElement, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nAll rights reserved.", style: "color: white; text-align: center; padding: 10px; padding-top: 35px;"});



});