import {modelSignal, TurboElementProperties} from "turbodombuilder";
import {TypingDrawingView} from "./typingDrawing.view";
import {TypingModel} from "./typing.model";

export type TypingData = {
    color?: any, //todo change this later
    text?: String,
    length?: number,
    height?: number,
};

export type PageProperties =
    TurboElementProperties<TypingDrawingView, TypingData, TypingModel> & {
    //TODO
};