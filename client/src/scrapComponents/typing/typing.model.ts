import {modelSignal, TurboModel, TurboYBlock} from "turbodombuilder";
import {ScrapData} from "../scrapComponent";

export class TypingModel extends TurboModel {
    @modelSignal() x: number;
    @modelSignal() y: number;
    @modelSignal() text: string;
    @modelSignal() color: string;
    public static dataBlockConstructor = TurboYBlock;

}