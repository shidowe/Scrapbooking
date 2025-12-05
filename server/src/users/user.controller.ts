import {UserRepository} from "./user.repository";
import {User} from "./user";

export class UserController {
    public constructor(private repository: UserRepository) {
    }

    public async signup(req:any, res:any): Promise<any> {
        const body = req.body; //may need to check that les champs sont remplis before moving on
        //decided to put the condition in the repo function cause we need to have access to the data
        let [flag, message] =await this.repository.signup(body.username, body.email, body.password, body.passwordConfirmation);
            if(flag){
                res.status(200).send({
                    "userId":body.userId,
                    "username":body.username
                })
                return;
            }

        res.status(400).send(message);
    }

    public async signin(req:any, res:any): Promise<any> {
        const body = req.body;
        let [flag, userId] =await this.repository.signin(body.username, body.password);
        if(flag){
            res.status(200).send({
                    "userId":userId,
                    "username":body.username
                })
                return;
        }
        res.status(400).send("Wrong username or password.");
    }
}