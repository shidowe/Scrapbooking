import {button, define, div, element, expose, turbo, TurboButton, TurboElement} from "turbodombuilder";
import "./navBar.css";

@define("nav-bar")
export class NavBar extends TurboElement {

    private divEl: HTMLDivElement;

    private profileButton: TurboButton;
    private homeButton: TurboButton;
    private createButton: TurboButton;

    protected setupUIElements() {
        super.setupUIElements();

        this.divEl = div({style: "display: flex; flex-flow: column; justify-content: space-between;"});

        this.profileButton = button({leftIcon: "profile_icon", onClick: () => {
                window.location.replace("/login")
            }});

        this.homeButton = button({leftIcon: "home_icon", onClick: () => {
                window.location.replace("/");
            }});

        this.createButton = button({leftIcon: "create_icon", onClick: () => {
                window.location.replace("/createPost");
            }});
        
            this.divEl.appendChild(this.profileButton);
        this.divEl.appendChild(this.homeButton);
        this.divEl.appendChild(this.createButton);
        
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.divEl]);
    }
}

export function navBar(properties = {}): NavBar {
    turbo(properties).applyDefaults({
        tag: "nav-bar"
    });
    return element({...properties}) as NavBar;
}