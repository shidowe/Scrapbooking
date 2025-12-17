import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page, page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";
import {PageView} from "../page.view";


@define("switch-view-button")
export class SwitchViewButton extends TurboElement {
    private switchViewButton: TurboButton;
    private pageId:number

    protected setupUIElements() {
        super.setupUIElements();

        this.switchViewButton = button({parent: this, leftIcon: "switch_icon", onClick: () => {
            let pageInfo= document.getElementById("page-info") as Page;
            makeRequest(
                "http://localhost:3000/pages/savePage",
                "post",
                {"pageData":pageInfo.data},
                (responseString)=>{ console.log("success");},
                (message)=>{console.log("failure");}
            );

            document.getElementById("containerPage").innerHTML = "";
            makeRequest(
                "http://localhost:3000/pages/loadPagesFromPageId",
                "post",
                {"pageIdList":[this.pageId]},
                (responseString)=>{
                    let pageList = JSON.parse(responseString);
                    for (let pageData of pageList) {
                        page({id: "page-visual", classes:"page-visual", data:pageData, parent:document.getElementById("containerPage")});
                    }
                },
                (message)=>{console.log("failure");}
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