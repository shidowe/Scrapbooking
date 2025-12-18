import {button, define, div, element, expose, spacer, turbo, TurboButton, TurboElement} from "turbodombuilder";
import "./navBar.css";
import {makeRequest} from "../makeRequest";
import {page, Page} from "../page/page";

@define("nav-bar")
export class NavBar extends TurboElement {

    //todo remove those 2
    private divEl: HTMLDivElement;
    private divTop: HTMLDivElement;

    private profileButton: TurboButton;
    private homeButton: TurboButton;
    private createButton: TurboButton;
    private logoutButton: TurboButton;
    private adminButton: TurboButton;

    protected setupUIElements() {
        super.setupUIElements();

        this.divEl = div({style: "display: flex; flex-flow: column; justify-content: space-between; height: 100%"});
        this.divTop = div({style: "display: flex; flex-flow: column; flex-grow:0;"});

        this.profileButton = button({leftIcon: "profile_icon", onClick: () => {
                window.location.replace("/login");
            }});

        this.homeButton = button({leftIcon: "home_icon", onClick: () => {
                window.location.replace("/");
            }});

        this.createButton= button({leftIcon: "create_icon", onClick: () => {
            makeRequest(
                "http://localhost:3000/pages/createNewPage",
                "post",
                {"userId":JSON.parse(sessionStorage.getItem("userId"))},
                (responseString)=>{
                    let response=JSON.parse(responseString);
                    sessionStorage.setItem("editPage",JSON.stringify(response.pageData));
                    sessionStorage.setItem("pages", response.userPages);
                    console.log(response.userPages);
                    window.location.replace("/create");
                },
                (message)=> { console.log("failure");}
            );
        }});

        this.logoutButton = button({leftIcon: "logout_icon", hidden: sessionStorage.getItem("username")?false:true, onClick: () => {
            sessionStorage.clear();
            window.location.replace("/login");
        }});


        
        this.divTop.appendChild(this.profileButton);
        this.divTop.appendChild(this.homeButton);
        this.divTop.appendChild(this.createButton);

        this.divEl.appendChild(this.divTop);
        this.divEl.appendChild(div({ style: "flex-grow: 1;" }));
        this.divEl.appendChild(this.logoutButton);


        
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