import { Post, PostCreateOptions, PostText } from "../../../domains/posts.domain";

export type FullyPost = Post & {
    additionalText: PostText
}
export interface PostsInitialState {
    list: Array<FullyPost>
}

export enum EnumPostsActions {
    CREATE_POST = "CREATE_POST"
}

export interface CreatePostsAction {
    type: EnumPostsActions.CREATE_POST,
    payload: FullyPost
}

export type PostsActionsTypes = keyof typeof EnumPostsActions;


export type PostsActions = CreatePostsAction;