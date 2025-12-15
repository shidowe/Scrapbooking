import {TurboElementProperties} from "turbodombuilder";
import {PageModel} from "./page.model";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {PageView} from "./page.view";
import {PageCreateView} from "./pageCreate.view";

export type PageData = {
    pageId?: number,
    userId?: number,
    title?: string,
    content?: Array<ScrapData>;
};

export type PageProperties =
    TurboElementProperties<PageView|PageCreateView, PageData, PageModel> & {
    //TODO
};