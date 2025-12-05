import {turbo, TurboView, div, p, TurboObserver, canvas,} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {Typing, typing} from "../scrapComponents/typing/typing";


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

        //on click create a text annotation
        this.pageDiv.addEventListener("click", (event: MouseEvent) => {
            let t: Typing = typing({x :event.clientX, y: event.clientY} );
            this.pageDiv.appendChild(t);
            this.model.addScrapComponent(t.model.content);
        })
        //this.pageDiv.appendChild(p({text: String(this.model.pageId)}));

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }
}
