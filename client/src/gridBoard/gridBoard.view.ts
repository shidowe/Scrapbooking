import {div, turbo, TurboView, img} from "turbodombuilder";
import {GridBoard} from "./gridBoard";
import {makeRequest} from "../makeRequest";
import {success} from "concurrently/dist/src/defaults";
import {Page, page} from "../page/page";
import "./gridBoard.css";
import {PageData} from "../page/page.types";


export class GridBoardView extends TurboView<GridBoard> {
    private container: HTMLDivElement;

    private gridItems: Array<HTMLElement> = [];


    protected setupUIElements() {
        super.setupUIElements();

        //Big container for the grid
        this.container = div({classes:"container"});

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

    /**
     * Modal pop-up preview that opens when clicking on a post (page)
     * @param pageData the page clicked to be opened
     */
    private openModal(pageData: PageData) {
        let overlay = div({classes: "modal-overlay"});
        let modalContent = div({classes: "modal-content"});

        page({data: pageData, parent: modalContent});

        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) overlay.remove();
        });
    }


    private loadPages(url): void {
        makeRequest(
            url,
            "post",
            {pageIdList: JSON.parse(sessionStorage.getItem("pages"))},
            (responseString)=>{
                let pageList = JSON.parse(responseString);
                console.log(pageList);
                for (let pageData of pageList) {
                    let box = div({parent:this.container, class: "page-box"});
                    box.addEventListener("click", () => {
                        this.openModal(pageData);
                    });
                    pageData.parent=box;
                    page({data:pageData, parent:box});

                    let info = div({parent:box});
                    div({parent:info, text:pageData.title});
                }
            },
            (message)=>{
                console.log("failure"+JSON.parse(sessionStorage.getItem("pages")));
            }
        );
    }


}