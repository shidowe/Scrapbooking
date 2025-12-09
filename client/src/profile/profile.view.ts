import {
    p,
    turbo,
    TurboView, div, h1
} from "turbodombuilder";
import {Profile} from "./profile";
import {ProfileModel} from "./profile.model";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {page} from "../page/page";


export class ProfileView extends TurboView<Profile, ProfileModel> {
    private mainDiv: HTMLDivElement;

    private usernameEl : HTMLElement;
    private logoutEl : HTMLElement;



    protected setupUIElements() {
        super.setupUIElements();

        this.mainDiv = div({id: "main-div"});

        this.usernameEl= h1({text:sessionStorage.getItem("username"), parent:this.mainDiv});

        this.logoutEl = p({parent:this.mainDiv, text:"Logout"});
        this.logoutEl.addEventListener("click", () => {
            sessionStorage.clear();
            window.location.reload();
        });
        console.log("PAGES IN SS :"+sessionStorage.getItem("pages"));
        makeRequest(
            "http://localhost:3000/pages/loadPagesFromPageId",
            "post",
            {"pageIdList":JSON.parse(sessionStorage.getItem("pages"))},
            (responseString)=>{
                let pageList = JSON.parse(responseString);
                for (let pageData of pageList) {
                    pageData.parent=this.mainDiv;
                    page(pageData);
                }
            },
            (message)=>{
                console.log("failure");
            }
        );

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild(this.mainDiv);
    }
}