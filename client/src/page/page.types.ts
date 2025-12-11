import {TurboElementProperties} from "turbodombuilder";
import {PageModel} from "./page.model";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {PageDrawingView} from "./pageDrawing.view";
import {PageListView} from "./pageList.view";

export type PageData = {
    pageId?: number,
    userId?: number,
    title?: string,
    content?: Array<ScrapData>;
};

export type PageProperties =
    TurboElementProperties<PageDrawingView|PageListView, PageData, PageModel> & {
    //TODO
};