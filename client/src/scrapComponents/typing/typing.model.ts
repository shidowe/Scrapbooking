import {modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponent";

export class TypingModel extends TurboModel {
    @modelSignal()  content: ScrapData


    public constructor(properties: any) {
        super(properties.x, properties.y);
    }


}