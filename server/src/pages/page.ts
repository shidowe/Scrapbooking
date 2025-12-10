export class Page {
    pageId: number;
    userId: number;
    title: string;
    content: any; //not sure about any

    public constructor(pageId: number,userId: number,content: any, title:string) {
        this.pageId = pageId;
        this.userId = userId;
        this.title = title;
        this.content = content;
    }
}