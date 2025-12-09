import {div, turbo, TurboView, img} from "turbodombuilder";
import {GridBoard} from "./gridBoard";
import "./gridBoard.css";


export class GridBoardView extends TurboView<GridBoard> {
    private container: HTMLDivElement;

    private gridItems: Array<HTMLElement> = [];


    protected setupUIElements() {
        super.setupUIElements();

        //Big container for the grid
        this.container = div({class:"container", style: "padding-top: 13vh; width: 1400px; margin-left:7%; margin-right: auto; margin-bottom:7%; columns: 6; column-gap: 20px;"});

        for(let i=1; i<=15; i++){
            let box = div({class: "box", style: "width: 100%; margin-bottom: 10px; break-inside: avoid; border-radius: 15px;"});
            let image = img({src: `https://gallery1.charleskdesigns.com/image/${i.toString().padStart(3, '0')}.jpg`, alt: "image", style: "max-width: 100%; min-width: 100%; border-radius: 10px;"});
            let caption = div({class: "caption", text: "Lorem ipsum ", style: "padding: 10px; text-align: center;"});
            box.append(image, caption);
            this.container.appendChild(box);
        }
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.container]);
    }

}