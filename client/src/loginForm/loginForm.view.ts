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


                for (let user of users){
                    console.log(user);
                    if (username == user.username && password == user.password) {
                        sessionStorage.setItem("id", String(user.id));
                        window.location.replace("https://www.youtube.com/watch?v=2yJgwwDcgV8");
                    }
                }
                // todo add message if logins wrong
            }
            else{ // if register
                let passwordConfirmation : string = this.passwordConfirmationEl.value;
                let email : string = this.emailEl.value;

                //todo : not quite sure what we're supposed to do here + make request is hella complicated
                makeRequest("http://localhost:3000/user/signup", "post", {"username":username, "email":email, "password":password, "passwordConfirmation":passwordConfirmation}, ()=>{console.log("success")}, ()=>{console.log("failure")});

                if (password == passwordConfirmation && ! users.find(user => user.username == this.usernameEl.value)) { //todo add conditions on the password
                    users.push({id:users.length, username:username, email:email, password: password});
                    console.log(users);
                    //fs.writeFile('../../../server/json/users.json', JSON.stringify(users, null, 2), 'utf8', (err)=>{console.log(err)});
                }
            }
        })

    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.modeEl, this.usernameEl,this.emailEl, this.passwordEl, this.passwordConfirmationEl, this.submitButton, this.switchModes]);
    }
}