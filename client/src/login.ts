import {div, h1, h2, p, spacer, style, TurboEventManager, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar"
import {profile} from "./profile/profile";
import "./style.css";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {

    TurboIcon.config.defaultDirectory = "assets";

    navBar({ parent: document.body,  class:"nav-bar"});

    if(sessionStorage.getItem("userId")) {
        profile({parent: document.body});
    }
    else {

        let header = div({ parent: document.body, classes:"header", style: "flex-direction: column" });
        h1({parent: header, text: "Patchwork", style: " text-align: center;"});
        h2({parent: header, text: "A Scrapbooking Website", style: " text-align: center;"});

        let mainbody = div({parent: document.body, classes: "body-content"});
        let centerWrapper = div({parent: mainbody, style: "width:100%; height:100%; display:flex; justify-content:center; align-items:center;"});
        loginForm({ parent: centerWrapper});

        div({ parent: document.body, classes:"footer" });
        let footer_text = p({parent: document.querySelector(".footer") as HTMLElement, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nM1 HCI - Université Paris-Saclay.", style:"color:white;"});

    }
});