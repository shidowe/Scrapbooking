import {User} from "./user";
import fs from "fs";

const userJSONPath = "../../json/users.json";

export class UserRepository {
    private data: User[] | undefined;

    public async fetchData():Promise<User[]>  {
        if(this.data) return this.data;
        return new Promise<User[]>((resolve, reject) => {
            fs.readFile(userJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async signUp(username:string, email:string, password:string):Promise<boolean>{
        let data = await this.fetchData();
        data.push({
            "userId": data.length,
            "username": username,
            "email": email,
            "password": password
        })
        fs.writeFile(userJSONPath, JSON.stringify(data), (err) => {console.log(err)});
        return new Promise((resolve, reject) => {resolve(true);})
    }

}