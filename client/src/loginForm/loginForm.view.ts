import {
    effect,
    h3,
    turboInput,
    input,
    p,
    turbo,
    button,
    TurboView,
    TurboButton,
    TurboInput,
    textarea
} from "turbodombuilder";
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
    private messageEl : HTMLElement;

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
        this.messageEl = p({hidden:true, color:"red"});

        //button to switch between register and login
        this.switchModes = p({text:this.login ? "Register" : "Login", id:"switch-modes",});
        this.switchModes.addEventListener("click", () => { //meh
            this.login = !this.login;
            this.passwordConfirmationEl.hidden= this.login;
            this.emailEl.hidden= this.login;
            this.modeEl.textContent = this.login ? "Login" : "Register";
            this.switchModes.textContent = this.login ? "Register" : "Login";
            this.messageEl.hidden = true;
        })

        //button to submit the form
        this.submitButton = button({text:"Submit", type:"submit", id:"submit-button"});
        this.submitButton.addEventListener("click", () => {

            let password : string = this.passwordEl.value;
            let username : string = this.usernameEl.value;

            if(this.login) {
                makeRequest(
                    "http://localhost:3000/users/signin",
                    "post",
                    {"username":username, "password":password},
                    (response)=>{
                        this.connect(response);
                    },
                    (message)=>{
                        this.messageEl.hidden = false;
                        this.messageEl.textContent=message;
                    }
                );
            }
            else{ // if register
                let passwordConfirmation : string = this.passwordConfirmationEl.value;
                let email : string = this.emailEl.value;

                //todo : not quite sure what we're supposed to do here + make request is hella complicated
                makeRequest(
                    "http://localhost:3000/users/signup",
                    "post",
                    {"username":username, "email":email, "password":password, "passwordConfirmation":passwordConfirmation},
                    (response)=>{
                        this.connect(response);
                    },
                    (message)=>{
                        this.messageEl.hidden = false;
                        this.messageEl.textContent=message;
                    });
            }
        })

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.modeEl, this.usernameEl,this.emailEl, this.passwordEl, this.passwordConfirmationEl,this.messageEl, this.submitButton, this.switchModes]);
    }

    private connect(response: any) {
        sessionStorage.setItem("username", response.username);
        sessionStorage.setItem("userId", response.userId);
        window.location.replace("/");
    }
}