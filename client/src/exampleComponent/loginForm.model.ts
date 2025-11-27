import {modelSignal, TurboModel} from "turbodombuilder";

export class LoginFormModel extends TurboModel {
    @modelSignal() public name: string = "";
    @modelSignal() public age: number = 0;
    @modelSignal() public username: string = "";
}