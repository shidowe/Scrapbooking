import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {LoginFormView} from "./loginForm.view";
import {LoginFormModel} from "./loginForm.model";
import "./loginForm.css";

@define("login-form")
export class LoginForm extends TurboElement<LoginFormView, LoginFormModel> {
}

export function loginForm(properties = {}): LoginForm {
    turbo(properties).applyDefaults({
        tag: "login-form",
        view: LoginFormView,
        model: LoginFormModel
    });
    return element({...properties}) as LoginForm;
}