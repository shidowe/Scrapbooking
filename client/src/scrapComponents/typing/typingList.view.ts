import {expose, textarea, turbo, turboInput, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingListView extends TurboView<Typing, TypingModel> {

    private contentObserver: TurboObserver;

    private textEl: HTMLElement;
    private xEl: HTMLElement;
    private yEl: HTMLElement;
    private colorEl: HTMLElement;

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();
        this.textEl = textarea({text: String(this.model.content.text), color: this.model.content.color});
        this.xEl = turboInput({type:"number", placeholder:this.model.content.x});
        this.yEl = turboInput({type:"number", placeholder:this.model.content.y});
        this.colorEl = turboInput({type:"color", placeholder:this.model.content.color});
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.textEl, this.xEl, this.yEl, this.colorEl]);
    }

}
