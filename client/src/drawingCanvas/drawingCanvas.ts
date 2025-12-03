import { define, TurboElement } from "turbodombuilder";

@define("drawing-canvas")
export class DrawingCanvas extends TurboElement {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    isDrawing = false;
    color = "#000000";
    size = 5;
    tool: "pen" | "text" | "sticker" = "pen";


}
