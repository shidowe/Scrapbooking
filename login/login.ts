import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {LoginView} from "./login.view";
import {LoginModel} from "./login.model";
import "./loginForm.css";

@define("login")
export class Login extends TurboElement<LoginView, LoginModel> {
}

export function login(properties = {}): Login {
    turbo(properties).applyDefaults({
        tag: "login",
        view: LoginView,
        model: LoginModel,
    });
    return element({...properties}) as Login;
}