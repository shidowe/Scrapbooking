import {expose, textarea, turbo, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLElement;
    @expose("") length;

    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.textEl = textarea({classes:"textured-page", text: String(this.model.content.text)});
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.textEl]);
    }

}
