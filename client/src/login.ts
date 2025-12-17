import {div, h1, h2, spacer, style, TurboEventManager, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar"
import {profile} from "./profile/profile";
import "./style.css";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {

    TurboIcon.config.defaultDirectory = "assets";

    navBar({ parent: document.body });

    if(sessionStorage.getItem("userId")) {
        profile({parent: document.body});
    }
    else {

        let d = div({parent: document.body});
        h1({parent:d, text: "Patchwork", style: "text-align: center;"});
        h2({parent:d, text: "A Scrapbooking website", style: "text-align: center;"});
        spacer({parent:d});
        
        loginForm({ parent: d, style: "align-self: center;, margin-left:20px;"});
    }
});