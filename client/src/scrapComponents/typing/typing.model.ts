import {modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponent";

export class TypingModel extends TurboModel {
    @modelSignal() x: number;
    @modelSignal() y: number;
    @modelSignal() text: string;
    @modelSignal() color: string;
}