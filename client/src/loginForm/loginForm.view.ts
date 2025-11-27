import {effect, h3, turboInput, input, p, turbo, button, TurboView, TurboButton, TurboInput} from "turbodombuilder";
import {LoginForm} from "./loginForm";
import {LoginFormModel} from "./loginForm.model";
//import * as fs from 'fs';
import users from '../../../server/json/users.json';



export class LoginFormView extends TurboView<LoginForm, LoginFormModel> {
    private login: boolean = true;
    private modeEl: HTMLElement;

    private usernameEl : TurboInput;
    private passwordEl : TurboInput;
    private passwordConfirmationEl : TurboInput;

    private switchButton: TurboButton; //TODO:replace the button with something prettier
    private submitButton: TurboButton;

    private nameEl: HTMLElement;
    private ageEl: HTMLElement;

    protected setupUIElements() {
        super.setupUIElements();

        this.modeEl= h3({text: "Login"});
        this.usernameEl = turboInput({type: "text", label: "Username"});
        this.passwordEl = turboInput({type: "password", label: "Password", minlength:"8", required:"true"});

        //starting with login so this in not visible
        this.passwordConfirmationEl = turboInput({type: "password", label: "Password confirmation", hidden: true});

        //button to switch between register and login
        this.switchButton = button({text:this.login ? "Register" : "Login"});
        this.switchButton.addEventListener("click", () => { //meh
            this.login = !this.login;
            this.passwordConfirmationEl.hidden= this.login;
            this.modeEl.textContent = this.login ? "Login" : "Register";
            this.switchButton.textContent = this.login ? "Register" : "Login";
        })

        //button to submit the form
        this.submitButton = button({text:"Submit", type:"submit"});
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
                if (password == passwordConfirmation && ! users.find(user => user.username == this.usernameEl.value)) { //todo add conditions on the password
                    users.push({id:users.length, username:username, password: password});
                    console.log(users);
                    //fs.writeFile('../../../server/json/users.json', JSON.stringify(users, null, 4), 'utf8', (err)=>{console.log(err)});
                }
            }
        })


        this.nameEl = h3();
        this.ageEl = p();
    }

    protected setupUILayout() {
        super.setupUILayout();
        turbo(this).addChild([this.modeEl, this.usernameEl, this.passwordEl, this.passwordConfirmationEl, this.switchButton, this.submitButton]);
    }

}