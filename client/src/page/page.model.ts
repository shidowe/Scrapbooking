import {effect, initializeEffects, modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {typing, Typing} from "../scrapComponents/typing/typing";
import {PageProperties} from "./page.types";
import content from "*.svg";

export class PageModel extends TurboModel {
    @modelSignal() public pageId: number;
    @modelSignal() public userId: number;
    @modelSignal() public title: string;
    @modelSignal() public content : ScrapData[]=[];

    @effect private setupContent(){
        this.setBlock(this.content, "", "content");
        console.log("CONTENT : "+this.content);
    }

    public addScrapComponent(scrapComponent: ScrapData) : void {
        this.content.push(scrapComponent);
    }

    public constructor() {
        super();
        initializeEffects(this);
    }
}