import { UserId, User } from "./user.domain";

export type PostTitle = string;
export type PostText = string;

export interface IPost {
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

export class Post implements IPost {
    public title: PostTitle;
    public author: UserId;
    public text: PostText;
    public createTime: DateTimeString

    constructor(post: PostCreateOptions, user: UserId) {
        this.title = post.title;
        this.author = user;
        this.text = post.text;
        this.createTime = post.createTime;

    }
}