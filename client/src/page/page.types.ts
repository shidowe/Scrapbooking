import {TurboElementProperties} from "turbodombuilder";
import {PageView} from "./page.view";
import {PageModel} from "./page.model";
import {ScrapData} from "../scrapComponents/scrapComponent";

export type PageData = {
    pageId?: number,
    userId?: number,
    content?: Array<ScrapData>;
};

export type PageProperties =
    TurboElementProperties<PageView, PageData, PageModel> & {
    //TODO
};