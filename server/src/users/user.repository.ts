import {User} from "./user";
import fs from "fs";

const userJSONPath = "server/json/users.json";


export class UserRepository {
    private data: User[] = [];

    public async fetchData():Promise<User[]>  {
        if(this.data.length>0) return this.data;
        return new Promise<User[]>((resolve, reject) => {
            fs.readFile(userJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async signup(username:string, email:string, password:string, passwordConfirmation:string):Promise<boolean>{
        let data = await this.fetchData();

        if(! this.data.find(user => user.username == username)
            && password == passwordConfirmation ) { //todo add more conditions to this
            data.push({
                "userId": data.length,
                "username": username,
                "email": email,
                "password": password
            });
            fs.writeFile(userJSONPath, JSON.stringify(data), (err) => { console.log(err)});
            return new Promise((resolve, reject) => {resolve(true);})
        }
        return new Promise((resolve, reject) => {
            resolve(false);
        })
    }

    public async signin(username:string, password:string):Promise<boolean>{
        await this.fetchData();
        let user = this.findUser(username);

        return new Promise((resolve, reject) => {
            resolve(user!=undefined && user.password == password);
        })
    }

    public findUser(username: string): User |undefined {
        for (let user of this.data){
            if (user.username == username) {return user;}
        }
        return undefined;
    }


}