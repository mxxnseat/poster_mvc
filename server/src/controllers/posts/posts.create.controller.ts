import { Request, Response } from "express";

import Post from "../../models/post.model";

interface RequestBody {
    userId: string,
    title: string,
    text: string
}

export async function createPost(req: Request<{}, {}, RequestBody>, res: Response) {
    try {
        const { userId, title, text } = req.body;

        const post = new Post({
            title,
            text,
            user: userId
        });

        await post.save();

        res.status(200).json({
            message: "Post created successfully"
        });
    } catch (e: unknown) {
        console.log(e);
        res.status(500).json({
            message: "Oooops something went wrong",
        });
    }
}