import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {TypingView} from "./typing.view";
import {TypingModel} from "./typing.model";
import {ScrapComponent} from "../scrapComponent";

@define("typing-element")
export class Typing extends TurboElement<TypingView, TypingModel> {
    @expose("model") public text : String;
    @expose("model") public model : TypingModel;

}

export function typing(properties = {}): Typing {
    turbo(properties).applyDefaults({
        tag: "typing",
        view: TypingView,
        model: TypingModel
    });
    return element({...properties}) as Typing;
}