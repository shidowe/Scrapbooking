import {div, TurboEventManager, TurboIcon} from "turbodombuilder";
import {loginForm} from "./loginForm/loginForm";
import { navBar } from "./navBar/navBar"
import {profile} from "./profile/profile";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {

    TurboIcon.config.defaultDirectory = "assets";

    navBar({ parent: document.body });

    if(sessionStorage.getItem("userId")) {
        profile({parent: document.body});
    }
    else {

        loginForm({ parent: document.body});
    }
});