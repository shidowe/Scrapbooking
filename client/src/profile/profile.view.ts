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

        makeRequest(
            "http://localhost:3000/pages/loadPagesFromPageId",
            "get",
            {"pageId":sessionStorage.getItem("pages")},
            (responseString)=>{
                console.log("success yay");
                console.log(responseString);
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