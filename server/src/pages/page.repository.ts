import {Page} from "./page";
import fs from "fs";

const userJSONPath = "../../json/users.json";

export class PageRepository {
    private data: Page[] = [];

    public async fetchData():Promise<Page[]>  {
        if(this.data.length>0) return this.data;
        return new Promise<Page[]>((resolve, reject) => {
            fs.readFile(userJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async loadPageFromPageId(pageId:number):Promise<Page> {
        await this.fetchData();
        return this.data[pageId];
    }

    public async loadPageFromUserId(userId:number):Promise<Page[]> {
        await this.fetchData();
        let result = [];
        for (let page of this.data){
            if(page.userId==userId){result.push(page);}
        }
        return result;
    }

    public async loadAllPages():Promise<Page[]> {
        await this.fetchData();
        return this.data;
    }


    public async savePage(pageId:number, userId:number, content:any ):Promise<boolean>{
        let data = await this.fetchData();
            data[pageId]={
                "pageId": pageId,
                "userId": userId,
                "content": content
            };
            fs.writeFile(userJSONPath, JSON.stringify(data), (err) => { console.log(err)});
            return new Promise((resolve, reject) => {resolve(true);})
    }




}