import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import "./navBar.css";
import {makeRequest} from "../makeRequest";

@define("page-list")
export class PageList extends TurboElement {

    private divs: HTMLDivElement[]=[];

    protected setupUIElements() {
        super.setupUIElements();

        makeRequest(
            "http://localhost:3000/pages/loadPagesFromPageId",
            "post",
            {"pageIdList":JSON.parse(sessionStorage.getItem("pages"))},
            (responseString)=>{
                let pageList = JSON.parse(responseString);
                for (let pageData of pageList) {
                    div({text:pageData.title, classes:"page-list-div" , parent:turbo(this)});
                }
            },
            (message)=> { console.log("failure");}
        );
    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function pageList(PageIdList: number[], properties = {}): PageList {
    turbo(properties).applyDefaults({
        tag: "page-list"
    });
    return element({...properties}) as PageList;
}