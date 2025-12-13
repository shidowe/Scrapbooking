import {div, effect, expose, textarea, turbo, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingDrawingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLTextAreaElement;

    private contentObserver: TurboObserver;

    

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();
        this.textEl = textarea({
            text: this.model.text,
            color: this.model.color,
            oninput: () => this.model.text = this.textEl.value
        });
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).setStyle("position", "relative");
        turbo(this).setStyle("left",this.model.x+"px");
        turbo(this).setStyle("top", this.model.y+"px");
        turbo(this).addChild([this.textEl]);
    }

    @effect textChanged() {
        console.log("drawing"+this.model.text)
        this.textEl.textContent = this.model.text;
    }


}
