import {button, div, turbo, TurboButton, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import {Page, page} from "./page/page";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
import {PageData} from "./page/page.types";
TurboEventManager.instance.preventDefaultWheel =false;
import "./style.css";
import {PageModel} from "./page/page.model";



document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}

    let createPageLayout = div({classes:"create-page-layout", parent:document.body});

    //todo tool bar
    let toolBar = div({parent: createPageLayout, classes:"toolbar"});

    navBar({parent: createPageLayout, classes:"nav-bar"});

    //page in drawing form
    let pageDrawing = page({ data: JSON.parse(sessionStorage.getItem("currentPage")), parent:createPageLayout, classes:"page-drawing"});

    //page in list form
    let pageList = page({data:pageDrawing.model.data, parent:createPageLayout, classes:"page-list"}, true);




});
