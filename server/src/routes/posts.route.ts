import { Router, Request, Response, NextFunction } from "express";

import { createPosts, deletePosts } from "../controllers/posts/posts.controller";
import asyncHandler from "express-async-handler"

const router = Router();

router
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("POSTS ROUTE");

        next();
    })
    .post("/create", asyncHandler(createPosts))
    .delete("/delete", asyncHandler(deletePosts))


export default {
    endpoint: "/posts",
    route: router
};