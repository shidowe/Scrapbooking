import {effect, initializeEffects, modelSignal, MvcBlockKeyType, TurboModel, TurboYBlock} from "turbodombuilder";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {typing, Typing} from "../scrapComponents/typing/typing";
import {PageProperties} from "./page.types";
import content from "*.svg";

export class PageModel extends TurboModel {
    @modelSignal() public pageId: number;
    @modelSignal() public userId: number;
    @modelSignal() public title: string;
    @modelSignal() public content : ScrapData[]=[];
    public static dataBlockConstructor = TurboYBlock;


    @effect private setupContent(){
    if (!this.hasBlock("content")) this.setBlock(this.content, "", "content");
    }

    public initialize(blockKey?: MvcBlockKeyType<"array"|"map">){
        super.initialize(blockKey);
        this.setBlock(this.content, "", "content");
    }

    public addScrapComponent(scrapComponent: ScrapData) : void {
        this.content.push(scrapComponent);
    }

    public constructor() {
        super();
        initializeEffects(this);
    }
}