import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageModel} from "./page.model";
import "./page.css";
import {PageData, PageProperties} from "./page.types";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {PageCreateView} from "./pageCreate.view";
import {PageView} from "./page.view";
import {PageList} from "../pageDisplay/pageList/pageList";
import {typing, Typing} from "../scrapComponents/typing/typing";
import {Sketch} from "../scrapComponents/sketch/sketch";


@define("page-elt")
export class Page extends TurboElement<PageCreateView|PageView,PageData, PageModel> {
    @expose("model") public content : Array<ScrapData>;

    public addAnnotation(annotation : ScrapData){
        this.model.content.push(annotation);
    }

    public addPoint(annotationId:number, x:number, y:number){
        this.model.content[annotationId].points.push({x, y});
    }


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
        view: listDisplay ? PageCreateView : PageView,
        model: PageModel,
        data: pageData,
    });

    return element({...properties}) as Page;
}


