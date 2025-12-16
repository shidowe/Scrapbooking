import {PageRepository} from "./page.repository";
import {Page} from "./page";

export class PageController {
    public constructor(private repository: PageRepository) {
    }


    public async changeLikeStatus(req:any, res:any): Promise<any> {
        const body = req.body;
        let likedPages = await this.repository.changeLikeStatus(body.userId, body.pageId, body.likeStatus); //TODO : do something if one of the pages is missing
        res.status(200).send(likedPages);
        return;
    }



    public async loadPagesFromPageId(req:any, res:any): Promise<any> {
        const body = req.body;
        let response =await this.repository.loadPageFromPageId(body.pageIdList); //TODO : do something if one of the pages is missing
        res.status(200).send(response);
        return;
    }

    public async deletePage(req:any, res:any): Promise<any> {
        const body = req.body;
        let response =await this.repository.deletePage(body.pageId); //TODO : do something if one of the pages is missingres.status(200).send(response)
        res.status(200).send(response);
        return;
    }

    public async createNewPage(req:any, res:any): Promise<any> {
        const body = req.body;
        let response =await this.repository.createNewPage(body.userId); //TODO : do something if one of the pages is missingres.status(200).send(response)
        res.status(200).send(response);
        return;
    }




    public async loadAllPages(req:any, res:any): Promise<any> {
        let response =await this.repository.loadAllPages();
        res.status(200).send(response);
        return;
    }

    public async savePage(req:any, res:any): Promise<any> {
        console.log("SAVE REQUEST : "+req.body);
        const body = req.body;
        let flag =await this.repository.savePage(body.pageData);
        res.status(200).send({});
    }
}