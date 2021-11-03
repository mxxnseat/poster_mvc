import { CreateRequestBody } from "../../types/requests/user.types";

import User from "./user.model";



export class UserDAO {
    private constructor() { }

    public static async create({ login, password, username }: CreateRequestBody) {
        const user = new User({
            login,
            password,
            username
        });

        return await user.save();
    }

    public static async get(login: string) {
        return await User.findOne({ login }, {
            project: {
                password: 0
            }
        });
    }

    public static async delete(login: string) {
        await User.deleteOne({ login });
    }

    public static async addPost(login: string, postId: string) {
        await User.findOneAndUpdate({ login }, {
            $push: {
                posts: postId
            }
        })
    }

    public static async deletePost(login: string, postId: string) {
        await User.findOneAndUpdate({ login }, {
            $pull: {
                posts: postId
            }
        })
    }
}