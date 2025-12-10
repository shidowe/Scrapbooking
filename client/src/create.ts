import {button, div, turbo, TurboButton, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import { DrawingCanvas } from "./drawingCanvas/drawingCanvas";
import {navBar} from "./navBar/navBar";
import {makeRequest} from "./makeRequest";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    if(! sessionStorage.getItem("userId")) {window.location.replace("/login");}
    if(sessionStorage.getItem("currentPage")) {
        //todo load page
    }
    else{
        let newPageButton:TurboButton= button({text:"New Page", parent:document.body});
        newPageButton.addEventListener("click", () => {
            makeRequest(
                "http://localhost:3000/pages/createNewPage",
                "post",
                {"userId":JSON.parse(sessionStorage.getItem("userId"))},
                (responseString)=>{

                },
                (message)=> { console.log("failure");}
            );
        })
    }
    navBar({parent: document.body});

    
});
