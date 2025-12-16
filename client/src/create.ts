import {button, div, jsonToYjs, turbo, TurboButton, TurboEventManager, TurboIcon, YDoc} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import {Page, page} from "./page/page";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
import {PageData} from "./page/page.types";
TurboEventManager.instance.preventDefaultWheel =false;
import "./style.css";
import {PageModel} from "./page/page.model";
import {switchViewButton} from "./page/buttons/switchViewButton";



document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}

    let createPageLayout = div({classes:"create-page-layout", parent:document.body});

    //todo tool bar
    let toolBar = div({parent: createPageLayout, classes:"toolbar"});

    navBar({parent: createPageLayout, classes:"nav-bar"});

    const data = JSON.parse(sessionStorage.getItem("currentPage"));
    const map =new YDoc().getMap("pageData")
    map.set("0", jsonToYjs(data));
    const yData = map.get("0");

    //page in drawing form
    //let pageDrawing = page({ data: yData, parent:createPageLayout, classes:"page-drawing"});

    //page in list form
    let containerDiv = div({id:"containerPage", parent:createPageLayout, });
    let pageList = page({id:"page-in-create", data: yData, parent:containerDiv, parentElement:containerDiv, classes:"page-list"}, true);
    toolBar.append(switchViewButton({parent:toolBar}, pageList.model.pageId));





});
