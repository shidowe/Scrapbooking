import {div, turbo, TurboView, img} from "turbodombuilder";
import {GridBoard} from "./gridBoard";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {page} from "../page/page";
import "./gridBoard.css";
import {PageData} from "../page/page.types";


export class GridBoardView extends TurboView<GridBoard> {
    private container: HTMLDivElement;

    private gridItems: Array<HTMLElement> = [];


    protected setupUIElements() {
        super.setupUIElements();

        //Big container for the grid
        this.container = div({class:"container", style: "padding-top: 13vh; width: 1400px; margin-left:7%; margin-right: 0; margin-bottom:7%; columns: 2; column-gap: 10px;"});

        if(window.location.href.includes("login")) {
            this.loadPages("http://localhost:3000/pages/loadPagesFromPageId");
        } else {
            this.loadPages("http://localhost:3000/pages/loadAllPages")
        }
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.container]);
    }

    private loadPages(url): void {
        makeRequest(
            url,
            "post",
            {"pageIdList":JSON.parse(sessionStorage.getItem("pages"))},
            (responseString)=>{
                let pageList = JSON.parse(responseString);
                console.log(pageList);
                for (let pageData of pageList) { //todo fix this
                    let box = div({parent:this.container, class: "page-box"});
                    pageData.parent=box;
                    page({data:pageData, parent:box});

                    let info = div({parent:box});
                    div({parent:info, text:pageData.title});
                    if (pageData.userId== sessionStorage.getItem("userId")) {
                        //todo add pen
                    }
                    //todo add like
                    div({parent:info, text:pageData.userId}); //todo replace userid by username
                    //todo add trashcan


                }
            },
            (message)=>{
                console.log("failure");
            }
        );
    }


}