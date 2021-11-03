import { NextFunction, Request, Response } from "express";
import { createPostsService } from "../../services/posts/posts.create.service";
import { CreateRequestBody } from "../../types/requests/posts.types";

export async function createPosts(req: Request<{}, {}, CreateRequestBody>, res: Response, next: NextFunction) {
    const { status, data } = await createPostsService(req.body);

    res.status(status).json(data);
}