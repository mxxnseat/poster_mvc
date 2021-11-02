import { NextFunction, Request, Response, Router } from "express";
import { createUser, deleteUser } from "../controllers/user/user.controller";

const router = Router();

router
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("User route");

        next();
    })
    .post("/create", createUser)
    .delete("/delete", deleteUser)

export default {
    endpoint: "/users",
    route: router
};