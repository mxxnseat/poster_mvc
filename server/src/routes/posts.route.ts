import { Router, Request, Response, NextFunction } from "express";

import { createPost } from "../controllers/posts/posts.controller";


const router = Router();

router
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("POSTS ROUTE");

        next();
    })
    .post("/create", createPost);

export default {
    endpoint: "/posts",
    route: router
};