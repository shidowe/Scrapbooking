import {effect, modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {Typing} from "../scrapComponents/typing/typing";

export class PageModel extends TurboModel {
    @modelSignal() public pageId: number;
    @modelSignal() public userId: number;
    @modelSignal() public content : Array<ScrapData> = new Array<ScrapData>();

    @effect private setupContent(){
        this.setBlock(this.content, "", "content");
    }

    public addScrapComponent(scrapComponent: ScrapData) : void {
        this.content.push(scrapComponent);
    }
}