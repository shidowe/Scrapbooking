import {modelSignal, TurboModel} from "turbodombuilder";
import {ScrapComponent} from "../scrapComponents/scrapComponent";
import {Typing} from "../scrapComponents/typing/typing";

export class PageModel extends TurboModel {
    public pageId: number;
    public userId: number;
    @modelSignal() public content : Array<ScrapComponent>;

    //todo fix the any
    public constructor(pageProperties) {
        super();
        this.pageId = pageProperties.pageId;
        this.userId = pageProperties.userId;

        for (let elt of pageProperties.content){
            switch(elt.type){
                //case "typing": this.content.push(elt);
                // add constructor for typing
            }
        }
        return this;
    }
}