import {turbo, TurboView, div, p} from "turbodombuilder";

import {PageModel} from "./page.model";
import {Page} from "./page";


export class PageView extends TurboView<Page, PageModel> {

    private pageDiv: HTMLElement;

    initialize(): void {
        super.initialize();
    }

    protected setupUIElements() {
        super.setupUIElements();

        this.pageDiv = div({style:"background-image:'create_icon'"}); //todo actually make this work
        this.pageDiv.appendChild(p({text: String(this.model.pageId)}));

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.pageDiv]);
    }
}
