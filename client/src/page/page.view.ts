import {turbo, TurboView, div, p, TurboObserver, canvas, expose,} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {Typing, typing} from "../scrapComponents/typing/typing";


export class PageView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLDivElement;
    private contentObserver: TurboObserver;

    private editMode: boolean = false;

    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                switch (data.type){
                    case "typing": {
                        data.parent=turbo(this.pageDiv);
                        let t = typing(data)
                    };
                }
            }
        });
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = div({classes:"textured-page"});

        //on click create a text annotation
        this.pageDiv.addEventListener("click", (event: MouseEvent) => {
            // todo
        })

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }
}
