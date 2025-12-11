import {button, div, turbo, TurboButton, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import {Page, page} from "./page/page";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
import {PageData} from "./page/page.types";
TurboEventManager.instance.preventDefaultWheel =false;
import "./style.css";



document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}
    if(sessionStorage.getItem("currentPage")) {
        let createPageLayout = div({classes:"create-page-layout", parent:document.body});

        //page in drawing form
        let pageDrawing = page({...JSON.parse(sessionStorage.getItem("currentPage")), ...{parent:createPageLayout, classes:"page-drawing"}});

        //page in list form
        let pageList = page({...JSON.parse(sessionStorage.getItem("currentPage")), ...{parent:createPageLayout, classes:"page-list"}}, true);


        //todo tool bar


    }
    navBar({parent: document.body});
});
