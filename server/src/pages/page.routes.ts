import {PageController} from "./page.controller";
import express from "express";
import {PageRepository} from "./page.repository";

export function pageRoute(): any {
    const router  =  express.Router();
    const controller = new PageController(new PageRepository());
    console.log("IN PAGE ROUTE");

    router.post("/loadPagesFromPageId", (req, res)=> controller.loadPagesFromPageId(req, res));
    router.post("/loadAllPages", (req, res)=> controller.loadAllPages(req, res));

    router.post("/createNewPage", (req, res)=> controller.createNewPage(req, res));
    router.post("/savePage", (req, res)=> controller.savePage(req, res));

    return router;
}