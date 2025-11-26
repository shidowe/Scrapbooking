import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {ExampleComponentView} from "./exampleComponent.view";
import {ExampleComponentData, ExampleComponentProperties} from "./exampleComponent.types";
import {ExampleComponentModel} from "./exampleComponent.model";
import "./exampleComponent.css";

@define("example-component")
export class ExampleComponent extends TurboElement<ExampleComponentView, ExampleComponentData, ExampleComponentModel> {
    @expose("model") public accessor name: string;
    @expose("model") public accessor age: number;
    @expose("model") public accessor username: string;
}

export function exampleComponent(properties: ExampleComponentProperties = {}): ExampleComponent {
    turbo(properties).applyDefaults({
        tag: "example-component",
        view: ExampleComponentView,
        model: ExampleComponentModel
    });
    return element({...properties}) as ExampleComponent;
}