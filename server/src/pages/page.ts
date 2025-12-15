export class Page {
    pageId: number;
    userId: number;
    title: string;
    content: any; //not sure about any
    likes: number[];


    public constructor(pageId: number,userId: number,content: any, title:string, likes:number[]) {
        this.pageId = pageId;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.likes = likes;
    }
}