import {TurboElementProperties} from "turbodombuilder";
import {PageView} from "../page/page.view";
import {PageModel} from "../page/page.model";
import {PageData} from "../page/page.types";

export type ScrapData = {
    type: "typing"|"drawing",
    x: number,
    y: number,
    color: string,

    text?: string,
};
