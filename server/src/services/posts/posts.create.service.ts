import Post from "../../models/post.model";
import User from "../../models/user.model";

import { CreateRequestBody } from "../../types/requests/posts.types";

import { transliteService } from "../translite.service";


export async function createPostsService({ userId, title, text }: CreateRequestBody) {
    const postByTitle = await Post.findOne({ title });

    if (postByTitle) {
        return {
            status: 400,
            data: {
                message: "Post with this name is already exist"
            }
        }
    }

    const alias = transliteService(title);
    const post = new Post({
        title,
        text,
        alias,
        user: userId,
    });

    await post.save();
    await User.findByIdAndUpdate(userId, {
        $push: {
            posts: post._id
        }
    })

    return {
        status: 200,
        data: {
            message: "Post created successfully",
            redirectUri: `/${alias}`
        }
    }
}