import { PostCreateOptions } from "../domains/posts.domain";
import { User } from "../domains/user.domain";

export function useCreatePosts() {
    // THIS IS WRONG VARIANT 
    function createPost(post: PostCreateOptions, user: User) {
        const newPost = createPost(post, user);

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
            return // Save errors to storage
        }

        // redirect to data.redirectUri
    }

    return {
        createPost
    }
}