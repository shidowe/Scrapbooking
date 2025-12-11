import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageModel} from "./page.model";
import "./page.css";
import {PageProperties} from "./page.types";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {typing} from "../scrapComponents/typing/typing";
import {PageListView} from "./pageList.view";
import {PageDrawingView} from "./pageDrawing.view";


@define("page-elt")
export class Page extends TurboElement<PageListView|PageDrawingView, PageModel> {
    @expose("model") public content : Array<ScrapData>;
}

export function page(properties:PageProperties = {}, listDisplay=false): Page {
    let pageData={
        pageId:properties.pageId,
        userId:properties.userId,
        title: properties.title,
        content: properties.content,
    };
    console.log("in page.ts : ",properties);
    if (listDisplay) {
        turbo(properties).applyDefaults({
            tag: "page-elt",
            view: PageListView,
            model: PageModel,
            data: pageData,
        });
    }
    else {
        turbo(properties).applyDefaults({
            tag: "page-elt",
            view: PageDrawingView,
            model: PageModel,
            data: pageData,
        });
    }

    return element({...properties}) as Page;
}

//todo not sure about that, it works tho
//todo add types
