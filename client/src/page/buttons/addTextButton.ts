import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {page, Page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";


@define("add-text-button")
export class AddTextButton extends TurboElement {

    private addTextButton: TurboButton;
    private pageId: string;

    protected setupUIElements() {
        super.setupUIElements();

        this.addTextButton = button({parent: this, leftIcon: "admin_icon", onClick: () => {
                let pageInfo = document.getElementById("page-info") as Page;
                pageInfo.addAnnotation({type:"typing", x:0, y:0, color:"black"})

                sessionStorage.setItem("editPage", JSON.stringify(pageInfo.data));


                //saving the added annotation
                makeRequest(
                    "http://localhost:3000/pages/savePage",
                    "post",
                    {"pageData":pageInfo.data},
                    (responseString)=>{ console.log("success");},
                    (message)=>{console.log("failure");}
                );
                window.location.reload();
            }
        });

    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function addTextButton(properties = {}, pageId:number): AddTextButton {
    turbo(properties).applyDefaults({
        tag: "add-text-button",
        pageId:pageId
    });
    return element({...properties}) as AddTextButton;
}