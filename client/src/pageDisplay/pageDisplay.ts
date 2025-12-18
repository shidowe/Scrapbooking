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
    TurboProperties,
    TurboIcon
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
        TurboIcon.config.defaultDirectory = "../assets";

        let GRID_ICON = "assets/grid_icon.svg";
        let LIST_ICON = "assets/list_icon.svg";

        let btnDiv = div({parent:this, style:"display:flex; justify-content:flex-end; margin:10px;"});

        this.changeDisplayMode = button({parent:btnDiv, id:"mode-btn",
            //text:this.gridDisplayMode?"List view":"Grid view",
            innerHTML: `<img src="${this.gridDisplayMode ? LIST_ICON : GRID_ICON}" class="toggle-icon" />`,
            onClick: () => {
                this.gridDisplayMode = !this.gridDisplayMode;
                this.gridBoard.hidden= this.gridDisplayMode;
                this.pageList.hidden= !this.gridDisplayMode;

                let iconPath = this.gridDisplayMode ? LIST_ICON : GRID_ICON;
                this.changeDisplayMode.innerHTML = `<img src="${iconPath}" class="toggle-icon"/>`;
            }});

        //todo : both page list and grid board make a request -> change this

        this.pageList = pageList(JSON.parse(sessionStorage.getItem("pages")),{parent: this});

        this.gridBoard=gridBoard({parent: this, hidden:true});

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