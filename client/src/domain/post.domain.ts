import { Username } from "./user.domain";

export type PostTitle = string;
export type PostText = string;

export interface Post {
    title: PostTitle,
    author: Username,
    createTime: DateTimeString,
    text: PostText
}


export function createPost(post: Post): Post {
    return {
        title: post.title,
        author: post.author,
        createTime: post.createTime,
        text: post.createTime
    }
}