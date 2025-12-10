import {Page} from "./page";
import fs from "fs";
import {User} from "../users/user";

const pageListJSONPath = "server/json/pageList.json";


export class PageRepository {
    private data: Page[] = [];

    public async fetchData():Promise<Page[]>  {
        return new Promise<Page[]>((resolve, reject) => {
            fs.readFile(pageListJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async loadPageFromPageId(pageIdList:[number]):Promise<Page[]> {
        if(this.data.length == 0){
            await this.fetchData();
        }

        let res=[]
        console.log("PAGE ID LIST : "+pageIdList);
        for(let pageId of pageIdList){
            res.push(this.data[pageId]);
        }
        return res;
    }

    public async loadAllPages():Promise<Page[]> {
        if(this.data.length == 0){
            await this.fetchData();
        }
        await this.fetchData();
        return this.data;
    }

    public async createNewPage(userId:number):Promise<Page>  {
        if(this.data.length==0) {
            await this.fetchData();
        }
        let page = new Page(this.data.length, userId, []);
        this.data.push(page);
        fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null,4), (err) => {});
        return page;
    }


    public async savePage(pageId:number, userId:number, content:any ):Promise<boolean>{
        if(this.data.length == 0){
            await this.fetchData();
        }
        this.data[pageId]={
                "pageId": pageId,
                "userId": userId,
                "content": content
        };
        fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null, 4), (err) => { console.log(err)});
        return new Promise((resolve, reject) => {resolve(true);})
    }




}