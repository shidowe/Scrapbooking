import {
    turbo,
    TurboView,
    div,
    p,
    TurboObserver,
    canvas,
    expose,
    turboInput,
    textarea,
    TurboButton, button, dropdown,
} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";
import {Typing, typing} from "../scrapComponents/typing/typing";
import {makeRequest} from "../makeRequest";
import {ScrapData} from "../scrapComponents/scrapComponent";
import {sketch} from "../scrapComponents/sketch/sketch";


export class PageCreateView extends TurboView<Page, PageModel> {

    private pageInfoList : HTMLElement;
    private title : HTMLElement;

    private saveButton: TurboButton;
    private addAnnotationButton : HTMLElement;

    private contentObserver: TurboObserver;

    private annotationElementList:HTMLElement[] =[];


    initialize(): void {
        super.initialize();

        this.model.getBlock("content")?.generateObserver({
            onAdded : (data) => {
                    let component;
                    switch (data.get("type")){
                        case "typing": {
                            component=typing({data:data, parent:this.pageInfoList});
                            break;
                        }
                        case "sketch": { //todo
                            break;
                        }
                    }
                return component;
            }
        });
    }

    protected setupUIElements() {
        super.setupUIElements();
            this.pageInfoList = div({classes:"page-info-list"});

            this.title = textarea({text: this.model.title, label: "PageTitle", parent:this.pageInfoList});

            this.saveButton= button({text:"Save", parent:this.pageInfoList, onClick:()=>{
                console.log( this.model.data);
                makeRequest(
                        "http://localhost:3000/pages/savePage",
                        "post",
                        this.model.data,
                        (responseString)=>{
                            //sessionStorage.setItem("currentPage", responseString);
                        },
                        (message)=> { console.log("failure");}
                    );
                }});

            this.addAnnotationButton = button({valueType:"Add Annotation", parent:this.pageInfoList, onClick:()=>{
                    let prop:ScrapData ={type: "typing", x:0,y:0, text:" ", color:"black"};
                    let t:Typing = typing({...prop, ...{parent:turbo(this.pageInfoList)}}, true); //is there a need to save it somewhere tho ?
                    //this.model.content.push(prop)
                    //TODO change color to current color
                }
            })


    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageInfoList]);
    }


}
