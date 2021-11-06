import { Post, PostCreateOptions } from "../domains/posts.domain";
import { User, UserId } from "../domains/user.domain";
import { PostsPortIn } from "../ports/in/createPost.port";

export function useCreatePosts() {
    async function createPost(post: PostCreateOptions, user: UserId): Promise<PostsPortIn> {
        const newPost = new Post(post, user);

        // Fetch to backend.
        // [POST] /posts/create {...newPost}
        const { status, data } = {
            status: 200,
            data: {
                message: "Post create",
                redirectUri: "/posts/alias"
            }
        };
        if (status >= 400) {
            return data;
        }

        return data;
    }

    return {
        createPost
    }
}