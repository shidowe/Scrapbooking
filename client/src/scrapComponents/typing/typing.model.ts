import { modelSignal} from "turbodombuilder";
import {ScrapComponent} from "../scrapComponent";

export class TypingModel extends ScrapComponent {
    @modelSignal() private color: any; //todo change this later
    @modelSignal()private text : String;
    @modelSignal()private length: number;
    @modelSignal()private height: number;


    public constructor(properties: any) {
        super(properties.x, properties.y);
    }


}