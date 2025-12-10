import {
    p,
    turbo,
    TurboView, div, h1,
    h2
} from "turbodombuilder";
import {Profile} from "./profile";
import {ProfileModel} from "./profile.model";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {page} from "../page/page";
import "./profile.css";
import { gridBoard } from "../gridBoard/gridBoard";


export class ProfileView extends TurboView<Profile, ProfileModel> {
    private profileHeader: HTMLDivElement;

    private usernameEl : HTMLElement;
    //private logoutEl : HTMLElement;



    protected setupUIElements() {
        super.setupUIElements();

        this.profileHeader = div({id: "profile-header", parent: document.body});

        //let leftDiv = div({parent:this.profileHeader, style:"display:flex; flex-direction:row; align-items:baseline;"});

        this.usernameEl= h1({text:sessionStorage.getItem("username"), parent:this.profileHeader});
        let profileLine = h2({text:"'s page <3", parent:this.profileHeader, style:"margin-left:10px;"});

        console.log("Current page: ", window.location.href);

        /*
        this.logoutEl = p({parent:this.profileHeader, text:"Logout", id:"logout-el"});
        this.logoutEl.addEventListener("click", () => {
            sessionStorage.clear();
            window.location.reload();
        });
        */

        /*
        console.log("PAGES IN SS :"+sessionStorage.getItem("pages"));
        makeRequest(
            "http://localhost:3000/pages/loadPagesFromPageId",
            "post",
            {"pageIdList":JSON.parse(sessionStorage.getItem("pages"))},
            (responseString)=>{
                let pageList = JSON.parse(responseString);
                for (let pageData of pageList) {
                    pageData.parent=this.profileHeader;
                    page(pageData);
                }
            },
            (message)=>{
                console.log("failure");
            }
        );
        */

        gridBoard({parent: document.body});

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild(this.profileHeader);
    }
}