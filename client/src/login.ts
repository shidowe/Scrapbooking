import {div, spacer, TurboEventManager, TurboIcon} from "turbodombuilder";
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
        spacer({ parent: document.body });
        loginForm({ parent: document.body});
    }
});