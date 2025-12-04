import {expose, textarea, turbo, TurboObserver, TurboView} from "turbodombuilder";

import {TypingModel} from "./typing.model"
import {typing, Typing} from "./typing";


export class TypingView extends TurboView<Typing, TypingModel> {
    private textEl: HTMLElement;
    @expose("") length;

    private contentObserver: TurboObserver;

    initialize(): void {
        super.initialize();
        /*
        this.model.getBlock("text")?.generateObserver({
            onAdded : (data) => {
                //functions to create stuff, no new smth
            }
        })
         */


    }

    protected setupUIElements() {
        super.setupUIElements();

        this.textEl = textarea({classes:"textured-page"});

        //this.pageDiv.appendChild(p({text: String(this.model.pageId)}));

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.textEl]);
    }

}
