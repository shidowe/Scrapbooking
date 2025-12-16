import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {PageModel} from "./page.model";
import "./page.css";
import {PageData, PageProperties} from "./page.types";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {PageCreateView} from "./pageCreate.view";
import {PageView} from "./page.view";
import {PageList} from "../pageDisplay/pageList/pageList";
import {typing, Typing} from "../scrapComponents/typing/typing";


@define("page-elt")
export class Page extends TurboElement<PageCreateView|PageView,PageData, PageModel> {
    @expose("model") public content : Array<ScrapData>;

    public addAnnotation(type:string, x=0, y=0, color="black", weight=3){
        //todo remake this
        switch (type){
            case "typing":
                this.model.content.push({type:"typing", x:x,y:y, color:color, text:" "}); break;
            case "sketch":
                this.model.content.push({type:"drawing", points:[{x:x, y:y}], color:color, weight:weight}); break;
        }

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


