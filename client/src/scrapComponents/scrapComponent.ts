import {Coordinate} from "turbodombuilder";

export type ScrapData = {
    type: "typing"|"drawing",
    x?: number,
    y?: number,
    color: string,

    text?: string,
    points?: Coordinate[],
    weight?: number
};
