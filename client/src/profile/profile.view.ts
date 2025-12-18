import {
    p,
    turbo,
    TurboView, div, h1,
    h2, TurboButton, button
} from "turbodombuilder";
import {Profile} from "./profile";
import {ProfileModel} from "./profile.model";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {page} from "../page/page";
import "./profile.css";
import {GridBoard, gridBoard} from "../gridBoard/gridBoard";
import { navBar } from "../navBar/navBar"
import {PageList, pageList} from "../pageDisplay/pageList/pageList";
import {PageDisplay, pageDisplay} from "../pageDisplay/pageDisplay";


export class ProfileView extends TurboView<Profile, ProfileModel> {
    private profileHeader: HTMLDivElement;

    private usernameEl : HTMLElement;
    private pageDisplay:PageDisplay;


    protected setupUIElements() {
        super.setupUIElements();

        /*
        navBar({ parent: document.body,  classes:"nav-bar"});
        this.profileHeader = div({id: "profile-header", parent: document.body});

        this.usernameEl= h1({text:sessionStorage.getItem("username"), parent:this.profileHeader});
        h2({text:"'s page <3", parent:this.profileHeader, style:"margin-left:10px;"});

        div({ parent: document.body, classes:"footer" });
        let footer_text = p({parent: document.querySelector(".footer") as HTMLElement, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nM1 HCI - Université Paris-Saclay.", style:"color:white;"});

        let bodyContent = div({parent: document.body, classes:"body-content"});
        this.pageDisplay = pageDisplay(JSON.parse(sessionStorage.getItem("pages")))

        //bodyContent.addChild(this.pageDisplay);
        */

        navBar({ parent: document.body,  classes:"nav-bar" });

        let profileHeader = div({ parent: document.body, classes:"header", id:"profile-header" });
        h1({text: sessionStorage.getItem("username"), parent: profileHeader});
        h2({text:"'s page <3", parent: profileHeader, style:"margin-left:10px;"});

        let bodyContent = div({parent: document.body, classes:"body-content"});
        this.pageDisplay = pageDisplay(JSON.parse(sessionStorage.getItem("pages")));
        bodyContent.appendChild(this.pageDisplay);

        let footer = div({ parent: document.body, classes:"footer" });
        p({ parent: footer, text: "© 2025 Patchwork - Sidonie Minodier and Victoria Myot\nM1 HCI - Université Paris-Saclay.", style:"color:white;" });

    }

    protected setupUILayout() {
        super.setupUILayout();
        //turbo(this).addChild(this.profileHeader);
    }
}