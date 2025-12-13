import {turbo, TurboView, div, TurboObserver} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {typing} from "../scrapComponents/typing/typing";
import {sketch} from "../scrapComponents/sketch/sketch";


export class PageDrawingView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLDivElement;
    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                let component;
                switch (data.get("type")){
                    case "typing": {
                        component=typing({data:data, parent:this.pageDiv});
                        break;
                    }
                    case "sketch": {
                        component=sketch({data:data, parent:this.pageDiv});
                        break;
                    }
                    return component;
                }
            }
        });
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = div({classes:"textured-page"});

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }


}
