import {PageController} from "./page.controller";
import express from "express";
import {PageRepository} from "./page.repository";

export function pagesRoute(): any {
    const router  =  express.Router();
    const controller = new PageController(new PageRepository());
    console.log("in user route from routes");

    router.get("/loadPageFromPageId", (req, res)=> controller.loadPageFromPageId(req, res));
    router.get("/loadPageFromUserId", (req, res)=> controller.loadPageFromUserId(req, res));
    router.get("/loadAllPages", (req, res)=> controller.loadAllPages(req, res));


    router.post("/savePage", (req, res)=> controller.savePage(req, res));


    console.log("userRoute");
    return router;
}