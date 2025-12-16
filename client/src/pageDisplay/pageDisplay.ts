import {
    button,
    define,
    div,
    effect,
    element,
    expose,
    spacer,
    turbo,
    TurboButton,
    TurboElement,
    TurboProperties
} from "turbodombuilder";
import {makeRequest} from "../makeRequest";
import {PageList, pageList} from "./pageList/pageList";
import {GridBoard, gridBoard} from "../gridBoard/gridBoard";
import "./pageDisplay.css";

@define("page-display")
export class PageDisplay extends TurboElement {

    private gridDisplayMode:boolean = false;
    private changeDisplayMode : TurboButton;
    private gridBoard: GridBoard;
    private pageList: PageList;

    protected setupUIElements() {
        super.setupUIElements();

        let btnDiv = div({parent:document.body, style:"display:flex; justify-content:flex-end; margin:10px;"});

        

        this.changeDisplayMode = button({parent:btnDiv, id:"mode-btn", text:this.gridDisplayMode?"List view":"Grid view",
            onClick: () => {
                this.gridDisplayMode = !this.gridDisplayMode;
                this.gridBoard.hidden= this.gridDisplayMode;
                this.pageList.hidden= !this.gridDisplayMode;
            }});

        //todo : both page list and grid board make a request -> change this

        this.pageList = pageList(JSON.parse(sessionStorage.getItem("pages")),{parent: document.body});

        this.gridBoard=gridBoard({parent: document.body, hidden:true});

    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function pageDisplay(PageIdList: number[], properties:TurboProperties = {}): PageDisplay {
    turbo(properties).applyDefaults({
        tag: "page-display"
    });
    return element({...properties}) as PageDisplay;
}