import {TurboElementProperties} from "turbodombuilder";
import {PageView} from "./page.view";
import {PageModel} from "./page.model";
import {ScrapComponent} from "../scrapComponents/scrapComponent";

export type PageData = {
    pageId?: number,
    userId?: number,
    content?: Array<ScrapComponent>; //no so sure about this type
};

export type PageProperties =
    TurboElementProperties<PageView, PageData, PageModel> & {
    //TODO
};