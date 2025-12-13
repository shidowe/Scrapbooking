import {User} from "./user";
import fs from "fs";

const userJSONPath = "server/json/users.json";


export class UserRepository {
    private data: User[] = [];

    public async fetchData()  {
        new Promise<User[]>((resolve, reject) => {
            fs.readFile(userJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
            });
        });
    }

    public async signup(username:string, email:string, password:string, passwordConfirmation:string):Promise<[boolean, any]>{
        await this.fetchData();

        if(! this.data.find(user => user.username == username)){
            if (password == passwordConfirmation) { //todo add more conditions to this

                let user = new User(this.data.length, username, email, password, false, [])
                this.data.push(user);
                fs.writeFile(userJSONPath, JSON.stringify(this.data, null,4), (err) => {});
                return [true, user];
            }
            return [false, "Different passwords"];
        }
        return [false, "Username is already taken"];
    }

    public async signin(username:string, password:string):Promise<[boolean, User  | string]>{
        await this.fetchData();


        for (let user of this.data){
            if (user.username == username) {
                return [true, user];
            }
        }
        return [false, "Wrong username or password"];
    }


}