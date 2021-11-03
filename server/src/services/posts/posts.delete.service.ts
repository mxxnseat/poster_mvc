import { DeleteRequestBody } from "../../types/requests/posts.types";
import Post from "../../models/post.model";
import User from "../../models/user.model";

export async function deletePostsService({ postId, userId }: DeleteRequestBody) {
    const post = await Post.findById(postId);

    if (!post) {
        return {
            status: 404,
            data: {
                message: "Post not found to delete"
            }
        }
    }

    const match = post.user?.toString() === userId;

    if (!match) {
        return {
            status: 403,
            data: {
                message: "You dont have permissions to delete this post"
            }
        }
    }

    await Post.findByIdAndRemove(postId);
    await User.findByIdAndUpdate(userId, {
        $pull: {
            posts: postId
        }
    });

    return {
        status: 200,
        data: {
            message: "Post delete"
        }
    }
}