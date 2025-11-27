import {div, h3, turboInput, input, p, turbo, button, TurboView, TurboButton, TurboInput, img} from "turbodombuilder";
import {NavBar} from "./navBar";
import {NavBarModel} from "./navBar.model";
import homeIcon from "../../assets/home_icon.svg";
import createIcon from "../../assets/create_icon.svg";
import userIcon from "../../assets/user_icon.svg";


export class NavBarView extends TurboView<NavBar, NavBarModel> {
    private divEl: HTMLDivElement;

    private profileButton: TurboButton;
    private homeButton: TurboButton;
    private createButton: TurboButton;


    protected setupUIElements() {
        super.setupUIElements();

        this.divEl = div({style: "display: flex; flex-flow: column; justify-content: space-between;"});

        this.profileButton = button({});
        this.profileButton.appendChild(
            img({ src: userIcon, class: "nav-icon" })
        );
        this.profileButton.addEventListener("click", () => {
            window.location.replace("/profile");
        });

        this.homeButton = button({});
        this.homeButton.appendChild(
            img({ src: homeIcon, class: "nav-icon" })
        );
        this.homeButton.addEventListener("click", () => {
            window.location.replace("/");
        });

        this.createButton = button({});
        this.createButton.appendChild(
            img({ src: createIcon, class: "nav-icon" })
        );
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