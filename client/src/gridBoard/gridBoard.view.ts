import {div, turbo, button, TurboView, TurboButton, TurboInput, img, TurboIcon, icon} from "turbodombuilder";
import {GridBoard} from "./gridBoard";


export class GridBoardView extends TurboView<GridBoard> {
    private divEl: HTMLDivElement;

    private profileButton: TurboButton;
    private homeButton: TurboButton;
    private createButton: TurboButton;


    protected setupUIElements() {
        super.setupUIElements();

        this.divEl = div({style: "display: grid; justify-content: space-between;"});

        for (let i = 0; i < 10; i++) {
            const imgEl = img({ src: `https://picsum.photos/200/300?random=${i}`, style: "margin: 10px; cursor: pointer;" });
            this.divEl.appendChild(imgEl);
        }
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.divEl]);
    }

}