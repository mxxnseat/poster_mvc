import { Request, Response } from "express";
import { deletePostsService } from "../../services/posts/posts.delete.service";
import { DeleteRequestBody } from "../../types/requests/posts.types";

export async function deletePosts(req: Request<{}, {}, DeleteRequestBody>, res: Response) {
    const { status, data } = await deletePostsService(req.body);

    res.status(status).json(data);
}
