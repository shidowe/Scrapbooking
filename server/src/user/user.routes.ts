import {UserController} from "./user.controller";
import express from "express";
import {UserRepository} from "./user.repository";

export function userRoute(): any {
    const router  =  express.Router();
    const controller = new UserController(new UserRepository());
    console.log("in user route from routes");

    router.post("/signup", (req, res)=> controller.signup(req, res));

    console.log("userRoute");
    return router;
}