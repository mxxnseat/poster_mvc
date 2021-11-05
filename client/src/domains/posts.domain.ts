import { UserId, User } from "./user.domain";

export type PostTitle = string;
export type PostText = string;

export interface Post {
    title: PostTitle,
    author: UserId,
    createTime: DateTimeString,
    text: PostText
}

export interface PostCreateOptions {
    title: PostTitle,
    createTime: DateTimeString,
    text: PostText
}

export function createPost(post: PostCreateOptions, user: User): Post {
    return {
        title: post.title,
        author: user.id,
        createTime: post.createTime,
        text: post.createTime
    }
}