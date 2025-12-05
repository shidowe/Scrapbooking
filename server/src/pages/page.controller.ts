import {PageRepository} from "./page.repository";
import {Page} from "./page";

export class PageController {
    public constructor(private repository: PageRepository) {
    }

    public async loadPageFromPageId(req:any, res:any): Promise<any> {
        const body = req.body;
        let flag =await this.repository.loadPageFromPageId(body.pageId);
        if(flag){
            res.status(200).send({
                //smth like users id or idk
            })
            return;
        }
        res.status(400).send({})
    }

    public async loadPageFromUserId(req:any, res:any): Promise<any> {
        const body = req.body;
        let flag =await this.repository.loadPageFromUserId(body.userId);
        if(flag){
            res.status(200).send({
                //smth like users id or idk
            })
            return;
        }
        res.status(400).send({})
    }


    public async loadAllPages(req:any, res:any): Promise<any> {
        const body = req.body;
        let flag =await this.repository.loadAllPages();
        if(flag){
            res.status(200).send({
                //smth like users id or idk
            })
            return;
        }
        res.status(400).send({})
    }

    public async savePage(req:any, res:any): Promise<any> {
        const body = req.body;
        let flag =await this.repository.savePage(body.pageId, body.userId, body.content);
        if(flag){
            res.status(200).send({
                //smth like users id or idk
            })
            return;
        }
        res.status(400).send({})
    }
}