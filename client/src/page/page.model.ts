import {effect, modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {typing, Typing} from "../scrapComponents/typing/typing";
import {PageProperties} from "./page.types";

export class PageModel extends TurboModel {
    @modelSignal() public pageId: number;
    @modelSignal() public userId: number;
    @modelSignal() public content : ScrapData[]=[];



    @effect private setupContent(){
        this.setBlock(this.content, "", "content");
    }

    public addScrapComponent(scrapComponent: ScrapData) : void {
        this.content.push(scrapComponent);
    }

    public constructor() {
        super();
        this.setupContent();

        for (let scrapData of this.content){
            switch (scrapData.type){
                case "typing": typing(scrapData);
            }
        }
    }
}