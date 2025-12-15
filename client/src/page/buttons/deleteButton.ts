import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page} from "../page";
import {makeRequest} from "../../makeRequest";

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
                {pageId:[this.pageId]},
                (responseString)=>{
                    console.log("success",responseString);
                    //let pageData = JSON.parse(responseString)[0];
                    //sessionStorage.setItem("currentPage", JSON.stringify(pageData));
                    //window.location.reload();
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