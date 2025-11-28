import {TurboElementProperties} from "turbodombuilder";
import {LoginView} from "./login.view";
import {LoginModel} from "./login.model";

export type ExampleComponentData = {
    name?: string,
    age?: number,
};

export type ExampleComponentProperties =
    TurboElementProperties<LoginView, ExampleComponentData, LoginModel> & {
    //TODO
};