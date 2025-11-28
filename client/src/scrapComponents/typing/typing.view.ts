import {expose, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {Typing} from "./typing";


export class TypingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLElement;
    @expose("") length;

}
