import {effect, h3, turboInput, input, p, turbo, button, TurboView, TurboButton, TurboInput} from "turbodombuilder";
import {LoginForm} from "./loginForm";
import {LoginFormModel} from "./loginForm.model";
//import * as fs from 'fs';
import users from '../../../server/json/users.json';
import {makeRequest} from "../makeRequest";


export class LoginFormView extends TurboView<LoginForm, LoginFormModel> {
    private login: boolean = true;
    private modeEl: HTMLElement;

    private usernameEl : TurboInput;
    private passwordEl : TurboInput;
    private passwordConfirmationEl : TurboInput;
    private emailEl: TurboInput;

    private switchModes: HTMLElement; //TODO:replace the button with something prettier
    private submitButton: TurboButton;

    protected setupUIElements() {
        super.setupUIElements();

        this.modeEl= h3({text: "Login"});
        this.usernameEl = turboInput({type: "text", label: "Username"});
        this.passwordEl = turboInput({input: {type: "password"}, label: "Password", minlength:"8", required:"true"});

        //starting with login so this in not visible
        this.passwordConfirmationEl = turboInput({input: {type: "password"}, label: "Password confirmation", hidden: true});
        this.emailEl = turboInput({type:"email", label:"Email", hidden:true})

        //button to switch between register and login
        this.switchModes = p({text:this.login ? "Register" : "Login", id:"switch-modes",});
        this.switchModes.addEventListener("click", () => { //meh
            this.login = !this.login;
            this.passwordConfirmationEl.hidden= this.login;
            this.emailEl.hidden= this.login;
            this.modeEl.textContent = this.login ? "Login" : "Register";
            this.switchModes.textContent = this.login ? "Register" : "Login";
        })

        //button to submit the form
        this.submitButton = button({text:"Submit", type:"submit", id:"submit-button"});
        this.submitButton.addEventListener("click", () => {

            let password : string = this.passwordEl.value;
            let username : string = this.usernameEl.value;

            if(this.login) {
                makeRequest("http://localhost:3000/user/signin", "post", {"username":username, "password":password}, ()=>{console.log("success")}, ()=>{console.log("failure")});
            }
            else{ // if register
                let passwordConfirmation : string = this.passwordConfirmationEl.value;
                let email : string = this.emailEl.value;

                //todo : not quite sure what we're supposed to do here + make request is hella complicated
                makeRequest("http://localhost:3000/user/signup", "post", {"username":username, "email":email, "password":password, "passwordConfirmation":passwordConfirmation}, ()=>{console.log("success")}, ()=>{console.log("failure")});
            }
        })

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.modeEl, this.usernameEl,this.emailEl, this.passwordEl, this.passwordConfirmationEl, this.submitButton, this.switchModes]);
    }
}