import {modelSignal, TurboModel} from "turbodombuilder";
import {ScrapData} from "../scrapComponent";

export class TypingModel extends TurboModel {
    @modelSignal()  content: ScrapData
}