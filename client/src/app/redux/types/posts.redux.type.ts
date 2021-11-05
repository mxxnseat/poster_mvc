import { Post, PostText } from "../../../domains/posts.domain";

export type FullyPost = Post & {
    additionalText: PostText
}
export interface PostsInitialState {
    list: Array<FullyPost>
}

export enum EnumPostsActions {

}

export type PostsActionsTypes = keyof typeof EnumPostsActions;


export type PostsActions = unknown;