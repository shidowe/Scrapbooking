import {turbo, TurboView, div, p, TurboObserver, canvas, expose,} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {Typing, typing} from "../scrapComponents/typing/typing";


export class PageView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLCanvasElement;
    private contentObserver: TurboObserver;

    private editMode: boolean = false;

    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                console.log("ADDED !");
                switch (data.type){
                    case "typing": {
                        data.parent=this.pageDiv;
                        typing(data)
                    };
                }
            }
        });
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = canvas({classes:"textured-page"});

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
