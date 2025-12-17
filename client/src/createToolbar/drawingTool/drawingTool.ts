import {TurboTool, turbo, TurboButton, define, TurboElement, button, element} from "turbodombuilder";
import {makeRequest} from "../../makeRequest";

export class DrawingToolTool extends TurboTool {
    public toolName: string= "drawing";
    public drawingButton: TurboButton;


    protected setupUIElements() {
        this.drawingButton = button({leftIcon:"edit_icon", text: "rand color", parent: this.element});
        let even = turbo(this.drawingButton).makeTool("randcolor").addToolBehavior("click",
            (event, target) => {
                if (target instanceof HTMLElement)
                    target.style.color = "blue";
                return true; //TO STOP PROPAGATING

            });
    }
}

export function drawingTool(properties = {}, pageId:number): any {
    turbo(properties).applyDefaults({
        tag: "drawing-tool",
        pageId: pageId
    });
    return element({...properties}) as any;
}


