import { CreateRequestBody } from "../../types/requests/posts.types";
import Post from "./posts.model";

export class PostsDAO {
    private constructor() { }

    public static async getAll() {
        return await Post.find();
    }

    public static async search(string: string) {
        return await Post.find({ title: { $regex: string, $options: "ig" } });
    }

    public static async getOne(title: string) {
        return await Post.findOne({ title });
    }

    public static async getById(postId: string) {
        return await Post.findById(postId);
    }

    public static async create(data: Omit<CreateRequestBody, "login"> & { user: string, alias: string }) {
        const post = new Post(data);
        await post.save();

        return post;
    }

    public static async deleteOne(postId: string) {
        await Post.findByIdAndDelete(postId);
    }
}