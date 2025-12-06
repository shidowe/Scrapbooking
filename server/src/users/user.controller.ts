import {UserRepository} from "./user.repository";
import {User} from "./user";

export class UserController {
    public constructor(private repository: UserRepository) {
    }

    public async signup(req:any, res:any): Promise<any> {
        const body = req.body; //todo : may need to check that les champs sont remplis before moving on
        let [flag, response] =await this.repository.signup(body.username, body.email, body.password, body.passwordConfirmation);
            if(flag){
                res.status(200).send(response);
                return ;
            }

        res.status(400).send(response);
    }

    public async signin(req:any, res:any): Promise<any> {
        const body = req.body;
        let [flag, response] =await this.repository.signin(body.username, body.password);
        if(flag){
            console.log(response);
            res.status(200).send(response);
                return ;
        }
        res.status(400).send(response);
    }
}