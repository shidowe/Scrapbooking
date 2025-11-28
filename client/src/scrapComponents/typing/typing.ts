import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {TypingView} from "./typing.view";
import {TypingModel} from "./typing.model";
import {ScrapComponent} from "../scrapComponent";

@define("typing")
export class Typing extends TurboElement<TypingView, TypingModel> {
    @expose("model") public text : String;

}

export function typing(properties = {}): Typing {
    turbo(properties).applyDefaults({
        tag: "typing",
        view: TypingView,
        model: TypingModel
    });
    return element({...properties}) as Typing;
}