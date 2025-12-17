import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import {Page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";


@define("add-text-button")
export class AddTextButton extends TurboElement {

    private addTextButton: TurboButton;
    private pageId: string;

    protected setupUIElements() {
        super.setupUIElements();

        this.addTextButton = button({parent: this, leftIcon: "admin_icon", onClick: () => {
            console.log("clicked");
                let pageInCreate = document.getElementById("page-in-create") as Page;
                pageInCreate.addAnnotation({type:"typing", x:0, y:0, color:"black"})
                console.log(pageInCreate.model.content);

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