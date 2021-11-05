import { PostCreateOptions } from "../domains/posts.domain";
import { User } from "../domains/user.domain";

export function useDeletePosts() {
    // THIS IS WRONG VARIANT 
    function deletePost(post: PostCreateOptions, user: User) {
        // Fetch to backend.
        // [DELETE] /posts/delete {postId: string}
        /* headers: {
            authorization: Bearer [token]
        }   
        */
        const { status, data } = {
            status: 200,
            data: {
                message: "Post delete"
            }
        };
        if (status >= 400) {
            return // Save errors to storage
        }

        // redirect to /
    }

    return {
        deletePost
    }
}