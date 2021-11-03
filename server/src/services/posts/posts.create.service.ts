import { PostsDAO } from "../../models/posts/posts.dao";
import { UserDAO } from "../../models/user/user.dao";

import { CreateRequestBody } from "../../types/requests/posts.types";

import { transliteService } from "../translite.service";


export async function createPostsService({ login, title, text }: CreateRequestBody) {
    const postByTitle = await PostsDAO.getOne(title);

    if (postByTitle) {
        return {
            status: 400,
            data: {
                message: "Post with this name is already exist"
            }
        }
    }

    const alias = transliteService(title);

    const user = await UserDAO.get(login);
    const post = await PostsDAO.create({ user: user?._id, title, text, alias });
    await UserDAO.addPost(login, post.id);

    return {
        status: 200,
        data: {
            message: "Post created successfully",
            redirectUri: `/${post.alias}`
        }
    }
}