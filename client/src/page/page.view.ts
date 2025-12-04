import {turbo, TurboView, div, p, TurboObserver, canvas,} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {ScrapComponent} from "../scrapComponents/scrapComponent";


export class PageView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLElement;
    private contentObserver: TurboObserver;

    private editMode: boolean = false;

    initialize(): void {
        super.initialize();
        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                //functions to create stuff, no new smth
            }
        })


    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = canvas({classes:"textured-page"});
        this.pageDiv.addEventListener("click", (event: MouseEvent) => {
            //this.pageDiv.appendChild( typing(event.clientX, event.clientY );
            //Todo create scrap component
        })
        //this.pageDiv.appendChild(p({text: String(this.model.pageId)}));

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }
}
