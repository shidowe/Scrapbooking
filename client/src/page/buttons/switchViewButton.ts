import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page, page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";
import {PageView} from "../page.view";


@define("switch-view-button")
export class SwitchViewButton extends TurboElement {

    //todo remove those 2

    private switchViewButton: TurboButton;
    private infoMode:boolean =true;
    private pageId:number

    protected setupUIElements() {
        super.setupUIElements();

        this.switchViewButton = button({parent: this, leftIcon: "switch_icon", onClick: () => {
            console.log("switchViewButton clicked");
            //todo save page
            this.infoMode = !this.infoMode;
            document.getElementById("containerPage").innerHTML = "";
                makeRequest(
                    "http://localhost:3000/pages/loadPagesFromPageId",
                    "post",
                    {"pageIdList":[this.pageId]},
                    (responseString)=>{
                        let pageList = JSON.parse(responseString);
                        for (let pageData of pageList) {
                            page({data:pageData, parent:document.getElementById("containerPage")}, this.infoMode);
                        }
                    },
                    (message)=>{
                        console.log("failure");
                    }
                );

        }
        });


    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function switchViewButton(properties = {}, pageId): SwitchViewButton {
    turbo(properties).applyDefaults({
        tag: "switch-view-button",
        pageId: pageId
    });
    return element({...properties}) as SwitchViewButton;
}