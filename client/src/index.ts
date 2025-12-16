import {div, p, TurboEventManager, TurboIcon, h1, h2} from "turbodombuilder";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";
import { gridBoard } from "./gridBoard/gridBoard";
import "./style.css";

TurboEventManager.instance.preventDefaultWheel =false;

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";
    //document.body.setAttribute("style", "background:#4D7C8A; align-content-:center");

    let d1=div({ parent: document.body, classes:"left-container" });
    let d2=div({ parent: document.body, classes:"right-container" });

    navBar({ parent: d1 });

    let header = div({ parent: d2, classes:"header", style: "flex-direction: column" });
    h1({parent: header, text: "Patchwork", style: " text-align: center;"});
    h2({parent: header, text: "A Scrapbooking Website", style: " text-align: center;"});

    gridBoard({ parent: d2 });

    div({ parent: d2, classes:"footer" });

    let footer_text = p({parent: document.querySelector(".footer") as HTMLElement, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nAll rights reserved.", style: "color: white; text-align: center; padding: 10px; padding-top: 35px;"});



});