import {modelSignal, TurboElementProperties} from "turbodombuilder";
import {TypingView} from "./typing.view";
import {TypingModel} from "./typing.model";

export type TypingDatas = {
    color?: any, //todo change this later
    text?: String,
    length?: number,
    height?: number,
};

export type PagePropertie =
    TurboElementProperties<TypingView, TypingDatas, TypingModel> & {
    //TODO
};