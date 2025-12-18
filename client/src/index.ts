import {div, p, TurboEventManager, TurboIcon, h1, h2} from "turbodombuilder";
import { navBar } from "./navBar/navBar"
import {page} from "./page/page";
import { gridBoard } from "./gridBoard/gridBoard";
import "./style.css";

TurboEventManager.instance.preventDefaultWheel =false;

document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    navBar({ parent: document.body, class:"nav-bar"});

    let header = div({ parent: document.body, classes:"header", style: "flex-direction: column" });
    h1({parent: header, text: "Patchwork", style: " text-align: center;"});
    h2({parent: header, text: "A Scrapbooking Website", style: " text-align: center;"});

    let mainbody = div({parent: document.body, class: "main-body"});
    gridBoard({ parent: mainbody });

    div({ parent: document.body, classes:"footer" });

    let footer_text = p({parent: document.querySelector(".footer") as HTMLElement, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nAll rights reserved."});

});