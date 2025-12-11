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
import {PageList, pageList} from "../pageList/pageList";
import {PageDisplay, pageDisplay} from "../pageDisplay/pageDisplay";


export class ProfileView extends TurboView<Profile, ProfileModel> {
    private profileHeader: HTMLDivElement;

    private usernameEl : HTMLElement;
    private pageDisplay:PageDisplay;
    //private logoutEl : HTMLElement;





    protected setupUIElements() {
        super.setupUIElements();

        this.profileHeader = div({id: "profile-header", parent: document.body});

        //let leftDiv = div({parent:this.profileHeader, style:"display:flex; flex-direction:row; align-items:baseline;"});

        this.usernameEl= h1({text:sessionStorage.getItem("username"), parent:this.profileHeader});
        h2({text:"'s page <3", parent:this.profileHeader, style:"margin-left:10px;"});

        this.pageDisplay = pageDisplay(JSON.parse(sessionStorage.getItem("pages")))

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild(this.profileHeader);
    }
}