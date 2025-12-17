import {
    button,
    define,
    div,
    element,
    expose,
    spacer,
    turbo,
    TurboButton,
    TurboDragEvent,
    TurboElement
} from "turbodombuilder";
import {page, Page} from "../page";
import {makeRequest} from "../../makeRequest";
import "./buttons.css";
import {TypingModel} from "../../scrapComponents/typing/typing.model";


@define("drawing-button")
export class DrawingButton extends TurboElement {

    //todo remove those 2

    private drawingButton: TurboButton;
    private pageId: string;
    private currentAnnotation : number;

    protected setupUIElements() {
        super.setupUIElements();

        this.drawingButton = button({parent: this, leftIcon: "edit_icon"});
        turbo(drawingButton).makeTool("move", {onActivate: ()=>{console.log("activated")}});
        turbo(drawingButton).addToolBehavior("turbo-drag", (e:TurboDragEvent, el) => {
            console.log("dragging)");
            let pageInCreate= document.getElementById("page-in-create") as Page;
            if (this.currentAnnotation == null){
                let i =e.position;
                //todo replace by current color and current weight
                pageInCreate.addAnnotation({type:"drawing", points:[{x:e.position.x, y:e.position.y}], color:"black", weight:3})
                this.currentAnnotation = pageInCreate.model.content.length-1;
            }
            else{
                pageInCreate.addPoint(this.currentAnnotation, e.position.x, e.position.y);
            }
        });

    }

    protected setupUILayout() {
        super.setupUILayout();
    }
}

export function drawingButton(properties = {}, pageId:number): DrawingButton {
    turbo(properties).applyDefaults({
        tag: "drawing-button",
        pageId:pageId
    });
    return element({...properties}) as DrawingButton;
}