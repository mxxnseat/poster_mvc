import { CreatePostsAction, EnumPostsActions, FullyPost } from "../types/posts.redux.type";

export function createPostAction(payload: FullyPost): CreatePostsAction {
    return {
        type: EnumPostsActions.CREATE_POST,
        payload
    }
}