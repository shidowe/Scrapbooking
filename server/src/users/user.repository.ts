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

    public async signup(username:string, email:string, password:string, passwordConfirmation:string):Promise<[boolean, string]>{
        if(this.data.length==0) {
            await this.fetchData();
        }

        if(! this.data.find(user => user.username == username)){
            if (password == passwordConfirmation) { //todo add more conditions to this
                this.data.push({
                    "userId": this.data.length,
                    "username": username,
                    "email": email,
                    "password": password
                });
                fs.writeFile(userJSONPath, JSON.stringify(this.data, null,4), (err) => {
                    console.log(err)
                });
                return [true, ""];
            }
            return [false, "Different passwords"];
        }
        return [false, "Username is already taken"];
    }

    public async signin(username:string, password:string):Promise<[boolean, number]>{
        if(this.data.length==0) {
            await this.fetchData();
        }
        let user = this.findUser(username);
        console.log(user);

        return (user!=undefined && user.password == password)? [true, user.userId] : [false, -1] ;
    }

    public findUser(username: string): User |undefined {
        for (let user of this.data){
            if (user.username == username) {return user;}
        }
        return undefined;
    }


}