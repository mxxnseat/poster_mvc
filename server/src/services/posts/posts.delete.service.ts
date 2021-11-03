import { PostsDAO } from "models/posts/posts.dao";
import { UserDAO } from "models/user/user.dao";
import { DeleteRequestBody } from "../../types/requests/posts.types";

export async function deletePostsService({ postId, login }: DeleteRequestBody) {
    const post = await PostsDAO.getById(postId);

    if (!post) {
        return {
            status: 404,
            data: {
                message: "Post not found to delete"
            }
        }
    }
    const user = await UserDAO.get(login);
    const match = post.user?.toString() === user?._id;

    if (!match) {
        return {
            status: 403,
            data: {
                message: "You dont have permissions to delete this post"
            }
        }
    }

    await PostsDAO.deleteOne(postId);
    await UserDAO.deletePost(login, postId);

    return {
        status: 200,
        data: {
            message: "Post delete"
        }
    }
}