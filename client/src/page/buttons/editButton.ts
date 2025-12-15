import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";


@define("edit-button")
export class EditButton extends TurboElement {

    //todo remove those 2

    private editButton: TurboButton;
    private pageId: string;

    protected setupUIElements() {
        super.setupUIElements();

        this.editButton = button({parent: this, leftIcon: "edit_icon", onClick: () => {
            makeRequest(
                "http://localhost:3000/pages/loadPagesFromPageId",
                "post",
                {"pageIdList":[this.pageId]},
                (responseString)=>{
                    let pageData = JSON.parse(responseString)[0];
                    sessionStorage.setItem("currentPage", JSON.stringify(pageData));
                    window.location.replace("/create");
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

export function editButton(properties = {}, pageId:number): EditButton {
    turbo(properties).applyDefaults({
        tag: "edit-button",
        pageId:pageId
    });
    return element({...properties}) as EditButton;
}