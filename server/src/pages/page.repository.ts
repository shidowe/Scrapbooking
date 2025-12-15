import {Page} from "./page";
import fs from "fs";
import {User} from "../users/user";

const pageListJSONPath = "server/json/pageList.json";
const userJSONPath = "server/json/users.json";



export class PageRepository {
    private data: Page[] = [];
    private userData: User[] = [];

    public async fetchData():Promise<Page[]>  {
        return new Promise<Page[]>((resolve, reject) => {
            fs.readFile(pageListJSONPath, "utf8", (err, data) => {
                this.data = JSON.parse(data);
                resolve(this.data as any);
            });
        });
    }

    public async fetchUserData():Promise<Page[]>  {
        return new Promise<Page[]>((resolve, reject) => {
            fs.readFile(userJSONPath, "utf8", (err, data) => {
                this.userData = JSON.parse(data);
                resolve(this.userData as any);
            });
        });
    }


    public async changeLikeStatus(userId:number, pageId:number, likeStatus:boolean):Promise<number[]> {
        if(this.data.length == 0){
            await this.fetchData();
        }
        await this.fetchUserData();

        if (likeStatus){
            this.data[pageId].likes.push(userId);
            this.userData[userId].likedPages.push(pageId);
        }else {
            this.data[pageId].likes= this.data[pageId].likes.filter((user) => user!=userId);
            this.userData[userId].likedPages = this.userData[userId].likedPages.filter((page) => page!=pageId);
        }

        fs.writeFile(userJSONPath, JSON.stringify(this.userData, null,4), (err) => {});
        fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null,4), (err) => {});

        return this.userData[userId].likedPages;
    }

    public async loadPageFromPageId(pageIdList:[number]):Promise<Page[]> {
        if(this.data.length == 0){
            await this.fetchData();
        }

        let res=[]
        for(let pageId of pageIdList){
            res.push(this.data[pageId]);
        }
        return res;
    }

    public async loadAllPages():Promise<Page[]> {
        if(this.data.length == 0){
            await this.fetchData();
        }
        return this.data;
    }

    public async deletePage(pageId:number):Promise<number[]>  {
        if(this.data.length==0) {
            await this.fetchData();
        }
        await this.fetchUserData();

        const userId = this.data[pageId].userId;
        this.userData[userId].pages = this.userData[userId].pages.filter((page) => page!=pageId);

        fs.writeFile(userJSONPath, JSON.stringify(this.userData, null,4), (err) => {});
        fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null,4), (err) => {});

        return this.userData[userId].pages;

    }

    public async createNewPage(userId:number):Promise<Page>  {
        if(this.data.length==0) {
            await this.fetchData();
        }
        await this.fetchUserData();

        //adding pageId to user list
        this.userData[userId].pages.push(this.data.length);
        fs.writeFile(userJSONPath, JSON.stringify(this.userData, null,4), (err) => {});

        //adding page to json file
        let page = new Page(this.data.length, userId, [], "Undefined", []);
        this.data.push(page);
        fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null,4), (err) => {});

        return page;
    }


    public async savePage(pageId:number):Promise<boolean>{
        if(this.data.length == 0){
            await this.fetchData();
        }
        //TODO

        //fs.writeFile(pageListJSONPath, JSON.stringify(this.data, null, 4), (err) => { console.log(err)});
        return new Promise((resolve, reject) => {resolve(true);})
    }




}