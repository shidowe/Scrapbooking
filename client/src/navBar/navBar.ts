import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {NavBarView} from "./navBar.view";
import {NavBarModel} from "./navBar.model";
import "./navBar.css";

@define("nav-bar")
export class NavBar extends TurboElement<NavBarView> {
    
}

export function navBar(properties = {}): NavBar {
    turbo(properties).applyDefaults({
        tag: "nav-bar",
        view: NavBarView,
        model: NavBarModel
    });
    return element({...properties}) as NavBar;
}