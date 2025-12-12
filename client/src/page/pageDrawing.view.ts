import {turbo, TurboView, div, p, TurboObserver, canvas, expose,} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {Typing, typing} from "../scrapComponents/typing/typing";


export class PageDrawingView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLDivElement;
    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                switch (data.type){
                    case "typing": {
                        typing({data:data, parent:this.pageDiv});
                        break;
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
