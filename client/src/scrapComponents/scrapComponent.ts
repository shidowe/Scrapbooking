import {modelSignal, TurboModel} from "turbodombuilder";

// TODO : idk what to extend
export class ScrapComponent extends TurboModel {
    @modelSignal() public x: number;
    @modelSignal() public y: number;
}
