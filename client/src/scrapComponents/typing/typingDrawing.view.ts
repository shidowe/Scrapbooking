import {expose, textarea, turbo, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingDrawingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLElement;

    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();
        this.textEl = textarea({text: String(this.model.text), color: this.model.color});
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).setStyle("position", "relative");
        turbo(this).setStyle("left", this.model.x);
        turbo(this).setStyle("top", this.model.y);
        turbo(this).addChild([this.textEl]);
    }

}
