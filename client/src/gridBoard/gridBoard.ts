import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {GridBoardView} from "./gridBoard.view";
import "./navBar.css";

@define("grid-board")
export class GridBoard extends TurboElement<GridBoardView> {
    
}

//grid board = content page, should take content from a json file and then display it like
//on pinterest with a grid of images/posts where each image/post is clickable and leads to the post page
//or maybe instead of a post page it could be a div above that shows the post details when clicked

export function gridBoard(properties = {}): GridBoard {
    turbo(properties).applyDefaults({
        tag: "grid-board",
        view: GridBoardView
    });
    return element({...properties}) as GridBoard;
}