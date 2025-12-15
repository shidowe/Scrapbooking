import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page} from "../page";
import {makeRequest} from "../../makeRequest";

@define("like-button")
export class LikeButton extends TurboElement {

    //todo remove those 2

    private likeButton: TurboButton;
    private liked:boolean = false;
    private pageId : number;

    protected setupUIElements() {
        super.setupUIElements();

        this.liked = sessionStorage.getItem("userId") && (JSON.parse(sessionStorage.getItem("likedPages"))).indexOf(this.pageId) > -1;
        this.likeButton = button({parent: this, leftIcon: this.liked? "liked_icon": "not_liked_icon", onClick: () => {
                console.log("clicked like button");
                console.log("sessionStorage", sessionStorage);
                this.liked = ! this.liked;
                this.likeButton.leftIcon = this.liked?"liked_icon" : "not_liked_icon";
                makeRequest(
                    "http://localhost:3000/pages/changeLikeStatus",
                    "post",
                    {userId:JSON.parse(sessionStorage.getItem("userId")), pageId:this.pageId, likeStatus:this.liked},
                    (responseString)=>{
                        console.log("like status success !",responseString);
                        sessionStorage.setItem("likedPages",responseString);
                    },
                    (message)=> { console.log("failure");}
                );
            }});
    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function likeButton(properties = {}, pageId:number): LikeButton {
    turbo(properties).applyDefaults({
        tag: "like-Button",
        pageId:pageId
    });
    return element({...properties}) as LikeButton;
}