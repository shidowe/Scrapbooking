import {div, effect, expose, textarea, turbo, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingDrawingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLDivElement;

    private contentObserver: TurboObserver;

    

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();
        this.textEl = div({
            text: this.model.text,
            oninput: () => this.model.text = this.textEl.textContent
        });
        this.textEl.style.color = this.model.color;
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
