import {button, div, jsonToYjs, turbo, TurboButton, TurboEventManager, TurboIcon, YDoc, h1, h2, p} from "turbodombuilder";
import {Page, page} from "./page/page";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
import {PageData} from "./page/page.types";
TurboEventManager.instance.preventDefaultWheel =false;
import "./style.css";
import {PageModel} from "./page/page.model";
import {switchViewButton} from "./page/buttons/switchViewButton";
import {drawingTool} from "./createToolbar/drawingTool/drawingTool";
import {drawingButton} from "./page/buttons/drawingButton";
import {addTextButton} from "./page/buttons/addTextButton";



document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}

    //let createPageLayout = div({classes:"create-page-layout", parent:document.body});

    navBar({parent: document.body, classes:"nav-bar"});


    let header = div({ parent: document.body, classes:"header", style: "flex-direction: column" });
    h1({parent: header, text: "Patchwork", style: " text-align: center;"});
    h2({parent: header, text: "A Scrapbooking Website", style: " text-align: center;"});

    const data = JSON.parse(sessionStorage.getItem("editPage")) as PageData;

    //create main area
    let create = div({id:"create", parent:document.body})

    //toolbar
    let toolBar = div({parent: create, classes:"toolbar"});
    toolBar.append(switchViewButton({parent:toolBar}, data.pageId));
    toolBar.append(addTextButton({parent:toolBar}, data.pageId));

    //left panel
    let pageInfo = page({data:data, id:"page-info", parent:create, classes:"page-info"}, true);

    //right panel
    let containerPage = div({id:"containerPage", class:"container-page", parent:create });
    let pageVisual =  page({data:data, id:"page-visual", parent:containerPage, classes:"page-visual"});





    //footer
    let footer = div({ parent: document.body, classes:"footer" });
    let footer_text = p({parent: footer, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nM1 HCI - Université Paris-Saclay."});


});
