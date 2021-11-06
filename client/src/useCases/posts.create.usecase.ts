import { Post, PostCreateOptions } from "../domains/posts.domain";
import { User, UserId } from "../domains/user.domain";
import { PostsPortIn } from "../ports/in/createPost.port";

export function useCreatePosts() {
    async function createPost(post: PostCreateOptions, user: UserId): Promise<PostsPortIn> {
        const newPost = new Post(post, user);

        // Fetch to backend.
        // [POST] /posts/create {...newPost}
        const { status, data } = {
            status: 400,
            data: {
                message: "Post create",
                redirectUri: "/posts/alias"
            }
        };
        if (status >= 400) {
            return Promise.reject("Oooops something went wrong");
        }

        return data;
    }

    return {
        createPost
    }
}