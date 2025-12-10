import {div, TurboEventManager, TurboIcon} from "turbodombuilder";
import { CreateToolbar } from "./createToolbar/createToolbar";
import { DrawingCanvas } from "./drawingCanvas/drawingCanvas";
import {navBar} from "./navBar/navBar";
TurboEventManager.instance.preventDefaultWheel =false;


document.addEventListener("DOMContentLoaded", () => {
    TurboIcon.config.defaultDirectory = "assets";

    navBar({parent: document.body});

    
});
