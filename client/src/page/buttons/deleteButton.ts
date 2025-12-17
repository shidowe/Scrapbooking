import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";


@define("delete-button")
export class DeleteButton extends TurboElement {

    //todo remove those 2

    private deleteButton: TurboButton;
    private pageId: string;

    protected setupUIElements() {
        super.setupUIElements();

        this.deleteButton = button({parent: this, leftIcon: "delete_icon", onClick: () => {
            makeRequest(
                "http://localhost:3000/pages/deletePage",
                "post",
                {pageId:[this.pageId], userId:sessionStorage.getItem("userId")},
                (responseString)=>{
                    console.log("success",responseString);
                    sessionStorage.setItem("pages",responseString);
                    },
                (message)=> { console.log("failure");}
            );
            return;
        }});
    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function deleteButton(properties = {}, pageId:number): DeleteButton {
    turbo(properties).applyDefaults({
        tag: "delete-button",
        pageId:pageId
    });
    return element({...properties}) as DeleteButton;
}