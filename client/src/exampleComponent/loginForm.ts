import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {LoginFormView} from "./loginForm.view";
import {LoginFormModel} from "./loginForm.model";
import "./loginForm.css";

@define("example-component")
export class LoginForm extends TurboElement<LoginFormView, LoginFormModel> {
    @expose("model") public accessor name: string;
    @expose("model") public accessor age: number;
    @expose("model") public accessor username: string;
}

export function exampleComponent(properties = {}): LoginForm {
    turbo(properties).applyDefaults({
        tag: "example-component",
        view: LoginFormView,
        model: LoginFormModel
    });
    return element({...properties}) as LoginForm;
}