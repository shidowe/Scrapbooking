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


export class ProfileView extends TurboView<Profile, ProfileModel> {
    private profileHeader: HTMLDivElement;

    private usernameEl : HTMLElement;
    //private logoutEl : HTMLElement;

    private gridDisplayMode:boolean = false;
    private changeDisplayMode : TurboButton;
    private gridBoard: GridBoard;
    private pageList: PageList;



    protected setupUIElements() {
        super.setupUIElements();

        this.profileHeader = div({id: "profile-header", parent: document.body});

        //let leftDiv = div({parent:this.profileHeader, style:"display:flex; flex-direction:row; align-items:baseline;"});

        this.usernameEl= h1({text:sessionStorage.getItem("username"), parent:this.profileHeader});
        h2({text:"'s page <3", parent:this.profileHeader, style:"margin-left:10px;"});

        this.changeDisplayMode = button({parent:this.profileHeader, leftIcon: "profile_icon", onClick: () => {
            this.gridDisplayMode = !this.gridDisplayMode;
            this.gridBoard.hidden= this.gridDisplayMode;
            this.pageList.hidden= !this.gridDisplayMode;
        }});

        this.pageList =pageList(JSON.parse(sessionStorage.getItem("pages")),{parent: document.body});

        this.gridBoard=gridBoard({parent: document.body, hidden:true});
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild(this.profileHeader);
    }
}