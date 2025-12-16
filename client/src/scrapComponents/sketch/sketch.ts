import {
    Coordinate, define,
    effect,
    element,
    Point, SvgNamespace,
    turbo,
    TurboElement, TurboElementProperties,
    TurboProxiedElement,
    TurboProxiedProperties
} from "turbodombuilder";
import * as d3 from "d3";
import {SketchData} from "./sketch.types";
import {SketchModel} from "./sketch.model";

@define("sketch-element")
export class Sketch extends TurboElement<any, SketchData, SketchModel> {

    @effect pointsChanged() {
        const points = this.model.points;
        if (points.length < 2) return;

        const lineGenerator = d3.line<Coordinate>()
            .x(d => d.x)
            .y(d => d.y)
            .curve(d3.curveNatural);

        const pathData = lineGenerator(points.filter(p => !isNaN(p.x) && !isNaN(p.y)));

        d3.select(this).append("svg")
            .append("path")
            .attr("d", pathData)
            .attr("stroke", "black")
            .attr("stroke-width", 1);
    }

}

export function sketch(properties: TurboElementProperties<any, SketchData, SketchModel> = {}) {
    turbo(properties).applyDefaults({tag: "sketch-element", model: SketchModel});
    return element({...properties});
}