import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {TypingDrawingView} from "./typingDrawing.view";
import {TypingModel} from "./typing.model";
import {PageProperties} from "../../page/page.types";
import {PageModel} from "../../page/page.model";
import {Page} from "../../page/page";
import {ScrapData} from "../scrapComponent";
import {TypingListView} from "./typingList.view";

@define("typing-element")
export class Typing extends TurboElement<TypingDrawingView|TypingListView, TypingModel> {
    @expose("model") public text : String;
    @expose("model") public model : TypingModel;
}

export function typing(properties:any, listDisplay=false): Typing {
    if(listDisplay){
        turbo(properties).applyDefaults({
            tag: "typing",
            view: TypingListView,
            model: TypingModel,
        });
    }
    else{
        turbo(properties).applyDefaults({
            tag: "typing",
            view: TypingDrawingView,
            model: TypingModel,
        });
    }
    return element({...properties}) as Typing;

}