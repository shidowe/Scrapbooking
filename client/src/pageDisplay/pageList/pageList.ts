import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import "./PageList.css";
import {makeRequest} from "../../makeRequest";
import {editButton} from "../../page/buttons/editButton";
import {likeButton} from "../../page/buttons/likeButton";
import {deleteButton} from "../../page/buttons/deleteButton";

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
                    let d = div({text:pageData.title, classes:"page-list-div" , parent:turbo(this)});

                    let temp =div({parent:d});

                    if(! window.location.href.includes("create")) {
                        if (sessionStorage.getItem("userId")) {
                            likeButton({parent: temp}, pageData.pageId);
                            if (JSON.parse(sessionStorage.getItem("userId")) == pageData.userId) {
                                editButton({parent: temp}, pageData.pageId);
                                deleteButton({parent: temp}, pageData.pageId);
                            } else if (sessionStorage.getItem("admin") == "true") {
                                deleteButton({parent: temp}, pageData.pageId);
                            }
                        }

                    }
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