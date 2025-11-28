import {effect, modelSignal, TurboModel} from "turbodombuilder";
import {ScrapComponent} from "../scrapComponents/scrapComponent";
import {Typing} from "../scrapComponents/typing/typing";

export class PageModel extends TurboModel {
    @modelSignal() public pageId: number;
    @modelSignal() public userId: number;
    @modelSignal() public content : Array<ScrapComponent>;

    //todo fix the any

    @effect private setupContent(){
        this.setBlock(this.content, "", "content");
    }
}