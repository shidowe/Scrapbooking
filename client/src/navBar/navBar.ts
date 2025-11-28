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

        this.profileButton = button({leftIcon: "user_icon", onClick: () => window.location.replace("/profile")});

        /*
        this.profileButton.appendChild(
            //img({ src: userIcon, class: "nav-icon" })
            icon({ icon: userIcon, class: "nav-icon" })
        );*/

        this.homeButton = button({leftIcon: "home_icon"});
        /*
        this.homeButton.appendChild(
            //img({ src: homeIcon, class: "nav-icon" })
            icon({ icon: homeIcon, class: "nav-icon" })
        );*/
        this.homeButton.addEventListener("click", () => {
            window.location.replace("/");
        });

        this.createButton = button({leftIcon: "create_icon"});
        /*
        this.createButton.appendChild(
            icon({ icon: createIcon, class: "nav-icon" })
        );*/
        this.createButton.addEventListener("click", () => {
            window.location.replace("/createPost");
        });

        this.divEl.appendChild(this.homeButton);
        this.divEl.appendChild(this.createButton);
        this.divEl.appendChild(this.profileButton);
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