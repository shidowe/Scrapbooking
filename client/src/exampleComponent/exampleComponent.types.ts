import {TurboElementProperties} from "turbodombuilder";
import {ExampleComponentView} from "./exampleComponent.view";
import {ExampleComponentModel} from "./exampleComponent.model";

export type ExampleComponentData = {
    name?: string,
    age?: number,
};

export type ExampleComponentProperties =
    TurboElementProperties<ExampleComponentView, ExampleComponentData, ExampleComponentModel> & {
    //TODO
};