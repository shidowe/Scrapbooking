import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageModel} from "./page.model";
import "./page.css";
import {PageData, PageProperties} from "./page.types";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {PageListView} from "./pageList.view";
import {PageDrawingView} from "./pageDrawing.view";
import {PageList} from "../pageDisplay/pageList/pageList";


@define("page-elt")
export class Page extends TurboElement<PageListView|PageDrawingView,PageData, PageModel> {
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
    turbo(properties).applyDefaults({
        tag: "page-elt",
        view: listDisplay ? PageListView : PageDrawingView,
        model: PageModel,
        data: pageData,
    });

    return element({...properties}) as Page;
}

//todo not sure about that, it works tho
//todo add types
