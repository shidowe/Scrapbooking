import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageView} from "./page.view";
import {PageModel} from "./page.model";
import {ScrapComponent} from "../scrapComponents/scrapComponent";
import "./page.css";
import pageList from '../../../server/json/pageList.json';


@define("page-elt")
export class Page extends TurboElement<PageView, PageModel> {
    @expose("model") public content : Array<ScrapComponent>;
}

export function page(properties = {}): Page {
    let pageData;
    if (properties.pageId){
        //todo populate page data
    }
    turbo(properties).applyDefaults({
        tag: "page-elt",
        view: PageView,
        model: PageModel,
        data: pageData
    });
    return element({...properties}) as Page;
}

//todo not sure about that, it works tho
//todo add types
