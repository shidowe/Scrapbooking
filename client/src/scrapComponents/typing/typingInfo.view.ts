import {
    effect,
    expose,
    input,
    textarea,
    turbo,
    TurboInput,
    turboInput,
    TurboObserver,
    TurboView
} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";
import "./typing.css";



export class TypingInfoView extends TurboView<Typing, TypingModel> {

    private contentObserver: TurboObserver;

    private textEl: HTMLTextAreaElement;
    private xEl: HTMLInputElement;
    private yEl: HTMLInputElement;
    private colorEl: HTMLInputElement;

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
        this.xEl = input({ type:"number", value:this.model.x.toString(), oninput: () => this.model.x = parseInt(this.xEl.value)});
        this.yEl = input({ type:"number", value:this.model.y.toString(), oninput:() => this.model.y = parseInt(this.yEl.value)});
        this.colorEl = input({type:"color", value:this.model.color, oninput:() => {
            console.log("clor cha"+this.colorEl.value);
                this.model.color = this.colorEl.value
            }});
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
