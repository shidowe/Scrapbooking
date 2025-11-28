import {UserRepository} from "./user.repository";
import {User} from "./user";

export class UserController {
    public constructor(private repository: UserRepository) {
    }

    public async signup(req:any, res:any): any {
        const body = req.body;
        if(body && true){
            let flag = this.repository.signUp(); //TODO pass the stuff + condition
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