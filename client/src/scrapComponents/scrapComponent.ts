import {TurboModel} from "turbodombuilder";

// TODO : idk what to extend
export class ScrapComponent extends TurboModel {
    private x: number;
    private y: number;

    public constructor(x: number, y: number) {
        super()
        this.x = x;
        this.y = y;
    }
}
