import {User} from "./user";
import fs from "fs";

export class UserRepository {
    private data: User[] | undefined;

    public async fetchData():Promise<User[]>  {
        if(this.data) return this.data;
        return new Promise<User[]>((resolve, reject) => {
            fs.readFile("../../json/users.json", "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async signUp(username:string, email:string, password:string, passwordConfimation:string):Promise<boolean>{
        let data = await this.fetchData();
        //todo
        return new Promise((resolve, reject) => {resolve(true);})
    }

}