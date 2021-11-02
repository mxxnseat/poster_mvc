import bcrypt from "bcrypt";
import User from "../../models/user.model";
import { CreateRequestBody } from "../../types/requests/user.types";


export async function createUserService({ login, password, username }: CreateRequestBody) {
    try {
        const passwordHash = bcrypt.hashSync(password, 7);

        const user = new User({
            login,
            password: passwordHash,
            username
        });

        const saveUser = await user.save();

        return {
            username: saveUser.username,
            posts: saveUser.posts,
        };
    } catch (e: unknown) {
        throw Error();
    }
}