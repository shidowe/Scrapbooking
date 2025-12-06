import {div, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import { DrawingCanvas } from "./drawingCanvas/drawingCanvas";
import {navBar} from "./navBar/navBar";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    const toolbarEl = document.body.querySelector("#toolbar");
    const canvasAreaEl = document.body.querySelector("#canvas-area");

    navBar({parent: document.body});

    //const drawingCanvas = new DrawingCanvas({});

    //createToolbar({});
});
