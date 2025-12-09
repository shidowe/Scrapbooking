import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageView} from "./page.view";
import {PageModel} from "./page.model";
import "./page.css";
import {PageProperties} from "./page.types";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {typing} from "../scrapComponents/typing/typing";


@define("page-elt")
export class Page extends TurboElement<PageView, PageModel> {
    @expose("model") public content : Array<ScrapData>;
}

export function page(properties:PageProperties = {}): Page {
    let pageData;
    if (properties.pageId){
        pageData ={
            pageId:properties.pageId,
            userId:properties.userId,
            content: properties.content,
        };
    }
    turbo(properties).applyDefaults({
        tag: "page-elt",
        view: PageView,
        model: PageModel,
        data: pageData,
    });

    return element({...properties}) as Page;
}

//todo not sure about that, it works tho
//todo add types
