import { NextFunction, Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";

import { createUser, deleteUser } from "../controllers/user/user.controller";

const router = Router();

router
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("User route");

        next();
    })
    .post("/create", asyncHandler(createUser))
    .delete("/delete", asyncHandler(deleteUser))

export default {
    endpoint: "/users",
    route: router
};