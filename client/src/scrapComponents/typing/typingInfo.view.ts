import {effect, expose, textarea, turbo, TurboInput, turboInput, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";
import "./typing.css";



export class TypingInfoView extends TurboView<Typing, TypingModel> {

    private contentObserver: TurboObserver;

    private textEl: HTMLTextAreaElement;
    private xEl: TurboInput;
    private yEl: TurboInput;
    private colorEl: HTMLTextAreaElement;

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
        this.xEl = turboInput({type:"number", placeholder:this.model.x, oninput: () =>this.model.x = parseInt(this.xEl.value)});
        this.yEl = turboInput({type:"number", placeholder:this.model.y, oninput:() => this.model.y = parseInt(this.yEl.value)});
        this.colorEl = textarea({type:"color", placeholder:this.model.color, oninput:() => this.model.color = this.colorEl.value});
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.textEl, this.xEl, this.yEl, this.colorEl]);
        turbo(this).addClass("typing-info");
    }

    @effect textChanged() {
        //this.textEl.textContent = this.model.text;
        this.textEl.value = this.model.text;
    }

}
