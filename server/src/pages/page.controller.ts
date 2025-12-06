import {PageRepository} from "./page.repository";
import {Page} from "./page";

export class PageController {
    public constructor(private repository: PageRepository) {
    }

    public async loadPagesFromPageId(req:any, res:any): Promise<any> {
        console.log("IN LOAD PAGES FROM ID");
        const body = req.body;
        let response =await this.repository.loadPageFromPageId(body.pageIdList); //TODO : do something if one of the pages is missing
        res.status(200).send(response)
        return;
    }




    public async loadAllPages(req:any, res:any): Promise<any> {
        let response =await this.repository.loadAllPages();
        res.status(200).send({response});
        return;
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