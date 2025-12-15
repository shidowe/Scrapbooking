import {turbo, TurboView, div, TurboObserver} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {typing} from "../scrapComponents/typing/typing";
import {sketch} from "../scrapComponents/sketch/sketch";
import {likeButton} from "./buttons/likeButton";
import {editButton} from "./buttons/editButton";
import {deleteButton} from "./buttons/deleteButton";


export class PageView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLDivElement;
    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                let component;
                switch (data.type){
                    case "typing": {
                        component=typing({data:data, parent:this.pageDiv});
                        break;
                    }
                    case "sketch": {
                        component=sketch({data:data, parent:this.pageDiv});
                        break;
                    }
                }
                return component;
            }
        });
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = div({classes:"textured-page"});
        if(sessionStorage.getItem("userId")){ //todo check that we're not in create page
            likeButton({parent:this}, this.model.pageId);
            if(JSON.parse(sessionStorage.getItem("userId"))== this.model.pageId){
                editButton({parent:this},this.model.pageId);
                deleteButton({parent:this},this.model.pageId);
            }else if (sessionStorage.getItem("admin")== "true"){
                deleteButton({parent:this},this.model.pageId);
            }
        }

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }


}
