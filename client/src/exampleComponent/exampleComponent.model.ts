import {modelSignal, TurboModel} from "turbodombuilder";

export class ExampleComponentModel extends TurboModel {
    @modelSignal() public name: string = "";
    @modelSignal() public age: number = 0;
    @modelSignal() public username: string = "";
}