export class Page {
    pageId: number;
    userId: number;
    content: any; //not sure about any

    public constructor(pageId: number,userId: number,content: any) {
        this.pageId = pageId;
        this.userId = userId;
        this.content = content;
    }
}