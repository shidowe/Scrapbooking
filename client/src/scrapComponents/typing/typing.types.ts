import {modelSignal, TurboElementProperties} from "turbodombuilder";
import {TypingView} from "./typing.view";
import {TypingModel} from "./typing.model";

export type TypingData = {
    color?: any, //todo change this later
    text?: String,
    length?: number,
    height?: number,
};

export type PageProperties =
    TurboElementProperties<TypingView, TypingData, TypingModel> & {
    //TODO
};