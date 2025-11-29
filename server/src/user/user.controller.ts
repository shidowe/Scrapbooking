import {UserRepository} from "./user.repository";
import {User} from "./user";

export class UserController {
    public constructor(private repository: UserRepository) {
    }

    public async signup(req:any, res:any): Promise<any> {
        const body = req.body;
        if(true){ //todo change condition
            let flag =await this.repository.signUp(body.username, body.email, body.password, body.passwordConfirmation);
            if(flag){
                res.status(200).send({
                    //smth like user id or idk
                })
                return;
            }
        }
        res.status(400).send({})
    }
}