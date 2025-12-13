import {define, effect, element, expose, turbo, TurboElement} from "turbodombuilder";
import {TypingDrawingView} from "./typingDrawing.view";
import {TypingModel} from "./typing.model";
import {PageProperties} from "../../page/page.types";
import {PageModel} from "../../page/page.model";
import {page, Page} from "../../page/page";
import {ScrapData} from "../scrapComponent";
import {TypingInfoView} from "./typingInfo.view";

@define("typing-element")
export class Typing extends TurboElement<TypingDrawingView|TypingInfoView, TypingModel> {
    @expose("model") public text : String;


}

export function typing(properties:any, listDisplay=false): Typing {
        turbo(properties).applyDefaults({
            tag: "typing-element",
            view: listDisplay ? TypingInfoView : TypingDrawingView,
            model: TypingModel,
        });
    return element({...properties}) as Typing;

}