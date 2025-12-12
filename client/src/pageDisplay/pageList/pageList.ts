import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import "./PageList.css";
import {makeRequest} from "../../makeRequest";

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
                    button({parent:d, leftIcon: "tabler_edit.png", onClick: () => {
                            //todo if there's a current page save it
                            console.log("pageId");
                            makeRequest(
                                "http://localhost:3000/pages/loadPagesFromPageId",
                                "post",
                                {"pageIdList":[pageData.pageId]},
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