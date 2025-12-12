import {Coordinate, modelSignal, TurboElement, TurboModel} from "turbodombuilder";

export class SketchModel extends TurboModel {
    @modelSignal() color: string;
    @modelSignal() weight: number;
    @modelSignal() points: Coordinate[];
}