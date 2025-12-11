import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {TypingView} from "./typing.view";
import {TypingModel} from "./typing.model";
import {PageProperties} from "../../page/page.types";
import {PageModel} from "../../page/page.model";
import {Page} from "../../page/page";
import {ScrapData} from "../scrapComponent";

@define("typing-element")
export class Typing extends TurboElement<TypingView, TypingModel> {
    @expose("model") public text : String;
    @expose("model") public model : TypingModel;
}

export function typing(properties:any, listDisplay?:boolean): Typing {
    console.log("TYPING PROPERTIES: "+properties.toString());
    turbo(properties).applyDefaults({
        tag: "typing",
        view: TypingView,
        model: TypingModel,
    });
    return element({...properties}) as Typing;

}