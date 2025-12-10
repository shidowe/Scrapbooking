import {button, div, turbo, TurboButton, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import { DrawingCanvas } from "./drawingCanvas/drawingCanvas";
import {Page, page} from "./page/page";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
import {PageData} from "./page/page.types";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}
    if(sessionStorage.getItem("currentPage")) {
        let prop = JSON.parse(sessionStorage.getItem("currentPage"));
        prop.parent=document.body;
        let p = page(prop);
    }
    navBar({parent: document.body});

    
});
